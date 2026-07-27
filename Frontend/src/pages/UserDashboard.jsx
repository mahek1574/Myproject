import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { 
  LogOut, 
  Sparkles, 
  Calendar, 
  FileText, 
  User, 
  Bell, 
  ShieldCheck,
  ArrowUpRight,
  Plus,
  Trash2,
  Headphones,
  Send,
  CheckCircle2,
  Clock
} from "lucide-react";
import { motion } from "framer-motion";

export default function UserDashboard() {
  const { user, logout } = useAuth();
  const [greeting, setGreeting] = useState("Welcome");
  
  const [meetings, setMeetings] = useState([
    { id: 1, title: "Product Demo & Walkthrough", date: "July 29, 2026", time: "03:30 PM", status: "Confirmed" },
    { id: 2, title: "Consultation Call", date: "August 02, 2026", time: "11:00 AM", status: "Pending" }
  ]);
  const [newMeetingTitle, setNewMeetingTitle] = useState("");
  const [newMeetingDate, setNewMeetingDate] = useState("");

  const [supportMsg, setSupportMsg] = useState("");
  const [supportSent, setSupportSent] = useState(false);

  const [notes, setNotes] = useState(() => {
    return localStorage.getItem("customer_dashboard_notes") || "";
  });
  
  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) setGreeting("Good morning");
    else if (hours < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  const handleNotesChange = (e) => {
    const val = e.target.value;
    setNotes(val);
    localStorage.setItem("customer_dashboard_notes", val);
  };

  const handleLogout = async () => {
    if (confirm("Are you sure you want to sign out?")) {
      await logout();
    }
  };

  const handleScheduleMeeting = (e) => {
    e.preventDefault();
    if (!newMeetingTitle || !newMeetingDate) return alert("Please fill in meeting details.");
    
    const newMeeting = {
      id: Date.now(),
      title: newMeetingTitle,
      date: newMeetingDate,
      time: "10:00 AM",
      status: "Scheduled"
    };

    setMeetings([newMeeting, ...meetings]);
    setNewMeetingTitle("");
    setNewMeetingDate("");
  };

  const handleSendSupport = (e) => {
    e.preventDefault();
    if (!supportMsg.trim()) return;
    setSupportSent(true);
    setTimeout(() => {
      setSupportMsg("");
      setSupportSent(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] dark:bg-[#0b100c] text-[#17221B] dark:text-gray-100 pt-24 pb-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        
      
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden bg-white dark:bg-[#131d16] p-6 sm:p-8 lg:p-10 rounded-[28px] sm:rounded-[36px] border border-[#BCCFC4]/30 dark:border-white/10 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#6B8F7B]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 relative z-10 w-full md:w-auto">
            <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#6B8F7B]/20 to-[#6B8F7B]/5 dark:from-[#6B8F7B]/30 dark:to-[#6B8F7B]/10 flex items-center justify-center text-[#6B8F7B] font-black text-2xl sm:text-3xl border border-[#6B8F7B]/30 shadow-inner shrink-0">
              {user?.name ? user.name[0].toUpperCase() : <User size={34} />}
            </div>
            <div className="space-y-1.5 w-full overflow-hidden">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#6B8F7B] bg-[#6B8F7B]/10 dark:bg-[#6B8F7B]/20 px-3 py-0.5 sm:py-1 rounded-full border border-[#6B8F7B]/20">
                  <ShieldCheck size={13} /> Valued Customer
                </span>
                <span className="text-[11px] sm:text-xs font-mono text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-white/5 px-2.5 py-0.5 rounded-md truncate max-w-[150px] sm:max-w-none">
                  ID: {user?._id ? user._id.substring(0, 8) : "CUST_OK"}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight truncate">
                {greeting}, <span className="text-[#6B8F7B]">{user?.name || "Customer"}</span>!
              </h1>
              <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                {user?.email || "customer@domain.com"}
              </p>
            </div>
          </div>

          <div className="relative z-10 w-full md:w-auto shrink-0">
            <button
              onClick={handleLogout}
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500 text-red-600 hover:text-white border border-red-500/20 px-6 py-3 rounded-2xl text-sm font-bold tracking-wide transition-all duration-300 shadow-xs cursor-pointer group"
            >
              <LogOut size={16} className="transition-transform group-hover:-translate-x-0.5" />
              Sign Out
            </button>
          </div>
        </motion.div>

  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-[#131d16] p-6 sm:p-8 rounded-[28px] sm:rounded-[32px] border border-[#BCCFC4]/30 dark:border-white/10 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/5 pb-4">
                <h3 className="text-sm sm:text-base font-bold flex items-center gap-2">
                  <Calendar className="text-[#6B8F7B] w-5 h-5 shrink-0" /> Book a Meeting
                </h3>
                <span className="text-[10px] font-bold bg-[#6B8F7B]/10 text-[#6B8F7B] px-2.5 py-1 rounded-full">Schedule</span>
              </div>

              <form onSubmit={handleScheduleMeeting} className="my-5 space-y-3">
                <div>
                  <label className="text-xs text-gray-400 dark:text-gray-500 font-semibold mb-1 block">Meeting Topic</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Project Consultation"
                    value={newMeetingTitle}
                    onChange={(e) => setNewMeetingTitle(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-black/25 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B8F7B]"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 dark:text-gray-500 font-semibold mb-1 block">Preferred Date</label>
                  <input 
                    type="date" 
                    value={newMeetingDate}
                    onChange={(e) => setNewMeetingDate(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-black/25 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B8F7B]"
                  />
                </div>
                
                <div className="flex justify-end pt-2">
                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#6B8F7B] hover:bg-[#577564] text-white shadow-md shadow-[#6B8F7B]/20 transition-all cursor-pointer"
                  >
                    <Plus size={15} /> Confirm & Book Slot
                  </button>
                </div>
              </form>

              <div className="mt-4 space-y-2 max-h-[160px] overflow-y-auto pr-1">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Your Upcoming Sessions</p>
                {meetings.map((m) => (
                  <div key={m.id} className="p-2.5 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-white/5 flex items-center justify-between gap-2 text-xs">
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-gray-800 dark:text-gray-200 truncate">{m.title}</p>
                      <p className="text-gray-400 flex items-center gap-1 mt-0.5 truncate"><Clock size={11} className="shrink-0" /> {m.date}</p>
                    </div>
                    <span className="text-[10px] font-bold bg-[#6B8F7B]/10 text-[#6B8F7B] px-2 py-0.5 rounded shrink-0">{m.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-[#131d16] p-6 sm:p-8 rounded-[28px] sm:rounded-[32px] border border-[#BCCFC4]/30 dark:border-white/10 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/5 pb-4">
                <h3 className="text-sm sm:text-base font-bold flex items-center gap-2">
                  <Headphones className="text-[#6B8F7B] w-5 h-5 shrink-0" /> Contact Support
                </h3>
                <span className="text-[10px] font-bold bg-[#6B8F7B]/10 text-[#6B8F7B] px-2.5 py-1 rounded-full">Help Desk</span>
              </div>

              <form onSubmit={handleSendSupport} className="my-5 space-y-4">
                <div>
                  <label className="text-xs text-gray-400 dark:text-gray-500 font-semibold mb-1 block">How can we help you today?</label>
                  <textarea 
                    rows="4"
                    value={supportMsg}
                    onChange={(e) => setSupportMsg(e.target.value)}
                    placeholder="Type your message, query, or feedback here..."
                    className="w-full p-4 rounded-2xl border border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-black/25 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#6B8F7B]"
                  />
                </div>

                {supportSent ? (
                  <div className="p-3 rounded-xl bg-green-500/10 text-green-600 text-xs font-bold flex items-center justify-center gap-2 border border-green-500/25">
                    <CheckCircle2 size={16} /> Message sent successfully! We'll reply soon.
                  </div>
                ) : (
                  <div className="flex justify-end">
                    <button 
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#6B8F7B] hover:bg-[#577564] text-white shadow-md shadow-[#6B8F7B]/20 transition-all cursor-pointer"
                    >
                      <Send size={15} /> Send Message to Team
                    </button>
                  </div>
                )}
              </form>
            </div>

            <div className="p-3 rounded-2xl bg-[#6B8F7B]/5 dark:bg-[#6B8F7B]/10 border border-[#6B8F7B]/15 text-xs text-gray-500 dark:text-gray-400 text-center font-medium mt-4">
              Average support response time: <span className="font-bold text-[#6B8F7B]">Under 2 hours</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-[#131d16] p-6 sm:p-8 rounded-[28px] sm:rounded-[32px] border border-[#BCCFC4]/30 dark:border-white/10 shadow-sm flex flex-col justify-between md:col-span-2 lg:col-span-1"
          >
            <div className="space-y-4 flex-grow flex flex-col">
              <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/5 pb-4">
                <h3 className="text-sm sm:text-base font-bold flex items-center gap-2">
                  <FileText className="text-[#6B8F7B] w-5 h-5 shrink-0" /> Personal Notes
                </h3>
                <button
                  onClick={() => { setNotes(""); localStorage.removeItem("customer_dashboard_notes"); }}
                  className="p-1.5 text-gray-400 hover:text-red-500 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
                  title="Clear Notes"
                >
                  <Trash2 size={15} />
                </button>
              </div>

              <div className="flex-grow flex flex-col relative">
                <textarea
                  value={notes}
                  onChange={handleNotesChange}
                  placeholder="Jot down quick reminders, questions for your next meeting, or ideas..."
                  className="w-full flex-grow p-4 min-h-[160px] sm:min-h-[180px] border border-gray-100 dark:border-white/5 rounded-2xl bg-gray-50 dark:bg-black/25 text-sm leading-relaxed placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B8F7B] focus:border-transparent transition-all resize-none font-normal"
                />
              </div>
            </div>

            <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-4 text-center font-bold uppercase tracking-wider">
              {notes.length > 0 ? `${notes.length} Characters Saved` : "Scratchpad ready"}
            </p>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-[#131d16] p-5 sm:p-6 sm:px-8 rounded-2xl sm:rounded-3xl border border-[#BCCFC4]/20 dark:border-white/10 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div className="flex items-start sm:items-center gap-4">
            <div className="p-3 bg-[#6B8F7B]/10 rounded-2xl text-[#6B8F7B] shrink-0">
              <Bell size={18} />
            </div>
            <div>
              <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">Customer Notice</p>
              <p className="text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-100 mt-0.5">Need urgent assistance? Use the contact support widget above or email us directly.</p>
            </div>
          </div>
          <span className="text-xs text-[#6B8F7B] bg-[#6B8F7B]/10 px-3.5 py-1.5 rounded-xl border border-[#6B8F7B]/20 font-bold w-fit flex items-center gap-1 shrink-0">
            24/7 Priority <ArrowUpRight size={13} />
          </span>
        </motion.div>

      </div>
    </div>
  );
}