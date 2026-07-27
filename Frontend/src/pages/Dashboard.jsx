import { useAuth } from "../context/AuthContext";
import { projectsData } from "../data/projectsData";
import { servicesData } from "../data/servicesData";
import { 
  LogOut, 
  FolderGit2, 
  Settings, 
  Sparkles, 
  Eye, 
  Edit3, 
  Trash2, 
  Plus, 
  CheckCircle2, 
  Briefcase 
} from "lucide-react";
import { motion } from "framer-motion";

export default function Dashboard() {
  const { admin, logout } = useAuth();
  const projects = projectsData;
  const services = Object.keys(servicesData).map(key => ({
    slug: key,
    ...servicesData[key]
  }));

  const handleLogout = async () => {
    if (confirm("Are you sure you want to logout?")) {
      await logout();
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] dark:bg-[#0b100c] text-[#17221B] dark:text-gray-100 pt-24 pb-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
        
      
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-[#BCCFC4]/30 dark:border-white/10 pb-6 sm:pb-8">
          <div className="space-y-1.5 w-full overflow-hidden">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#6B8F7B] bg-[#6B8F7B]/10 dark:bg-[#6B8F7B]/20 px-3 py-1 rounded-full">
                <Sparkles size={11} /> Admin Panel
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight truncate">
              Welcome back, <span className="text-[#6B8F7B]">{admin?.username || "Admin"}</span>
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Manage your landing page layout, view projects, and configure service details.
            </p>
          </div>
          <div className="w-full md:w-auto shrink-0">
            <button
              onClick={handleLogout}
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-colors shadow-md cursor-pointer"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>

  
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white dark:bg-[#131d16] p-5 sm:p-6 rounded-3xl border border-[#BCCFC4]/30 dark:border-white/10 shadow-xs flex items-center gap-4">
            <div className="p-3 bg-[#6B8F7B]/15 text-[#6B8F7B] rounded-2xl shrink-0">
              <FolderGit2 size={24} />
            </div>
            <div>
              <p className="text-[11px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total Projects</p>
              <p className="text-xl sm:text-2xl font-bold mt-0.5">{projects.length}</p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#131d16] p-5 sm:p-6 rounded-3xl border border-[#BCCFC4]/30 dark:border-white/10 shadow-xs flex items-center gap-4">
            <div className="p-3 bg-[#6B8F7B]/15 text-[#6B8F7B] rounded-2xl shrink-0">
              <Briefcase size={24} />
            </div>
            <div>
              <p className="text-[11px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total Services</p>
              <p className="text-xl sm:text-2xl font-bold mt-0.5">{services.length}</p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#131d16] p-5 sm:p-6 rounded-3xl border border-[#BCCFC4]/30 dark:border-white/10 shadow-xs flex items-center gap-4">
            <div className="p-3 bg-[#6B8F7B]/15 text-[#6B8F7B] rounded-2xl shrink-0">
              <CheckCircle2 size={24} />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Database Status</p>
              <p className="text-xs sm:text-sm font-semibold text-green-600 dark:text-green-400 mt-1.5 flex items-center gap-1.5 truncate">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-ping inline-block shrink-0"></span>
                Connected (Compass)
              </p>
            </div>
          </div>
        </div>
      
      
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">Static Portfolio Projects</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">Dummy projects currently visible on your live landing page.</p>
            </div>
            <button className="w-full sm:w-auto flex items-center justify-center gap-1.5 bg-[#6B8F7B] hover:bg-[#577564] text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-xs cursor-pointer">
              <Plus size={14} /> Add Project
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-[#131d16] rounded-3xl overflow-hidden border border-[#BCCFC4]/20 dark:border-white/10 shadow-sm flex flex-col justify-between"
              >
                <div className={`h-36 bg-gradient-to-br ${project.bgColor} p-6 flex flex-col justify-between`}>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#17221B]/80 dark:text-white/80 bg-white/40 dark:bg-white/10 px-2.5 py-1 rounded-full w-fit">
                    {project.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#17221B] dark:text-white mt-2 leading-tight truncate">
                    {project.title}
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Impact Generated</span>
                    <span className="text-xs font-bold text-[#6B8F7B]">{project.impact}</span>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-[#BCCFC4]/20 dark:border-white/10 pt-4 gap-2">
                    <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 rounded-xl text-xs font-semibold transition-colors cursor-pointer">
                      <Edit3 size={12} /> Edit
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 rounded-xl text-xs font-semibold transition-colors cursor-pointer">
                      <Trash2 size={12} /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    
  
        <div className="space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">Static Services List</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">Services catalog from servicesData.js configuration.</p>
          </div>

          <div className="bg-white dark:bg-[#131d16] rounded-3xl border border-[#BCCFC4]/20 dark:border-white/10 shadow-sm overflow-hidden">
            <div className="divide-y divide-[#BCCFC4]/20 dark:divide-white/10">
              {services.map((service, index) => (
                <div key={index} className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:bg-gray-50/50 dark:hover:bg-white/1">
                  <div className="space-y-1 max-w-xl min-w-0">
                    <h3 className="text-sm sm:text-md font-bold text-[#6B8F7B] truncate">{service.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">{service.subtitle}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {service.techStack.map((tech, i) => (
                        <span key={i} className="text-[10px] font-medium bg-[#EAF0EB] dark:bg-white/5 text-[#17221B]/80 dark:text-gray-300 px-2 py-0.5 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-2 md:pt-0 shrink-0">
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-4 py-2 border border-[#BCCFC4]/30 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl text-xs font-bold transition-colors cursor-pointer">
                      <Eye size={13} /> View
                    </button>
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-4 py-2 bg-[#17221B] dark:bg-white text-white dark:text-[#17221B] hover:opacity-90 rounded-xl text-xs font-bold transition-colors cursor-pointer">
                      <Settings size={13} /> Manage
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}