import { 
  ShieldCheck, 
  Users, 
  Stethoscope, 
  Briefcase, 
  Building2, 
  Package, 
  Calendar, 
  CheckSquare,
  Layers,
  Cloud,
  Code2,
  Workflow,
  Terminal,
  Cpu
} from "lucide-react";

export const PROJECTS = [
  { title: "Insurance Module", icon: ShieldCheck, category: "Enterprise" },
  { title: "Facial Recognition Attendance", icon: Users, category: "Security" },
  { title: "Patient Management", icon: Stethoscope, category: "Healthcare" },
  { title: "Sales CRM", icon: Briefcase, category: "Sales" },
  { title: "ERP Application", icon: Building2, category: "Business" },
  { title: "HRMS Application", icon: Users, category: "Human Resources" },
  { title: "Inventory Management", icon: Package, category: "Logistics" },
  { title: "Appointment Management", icon: Calendar, category: "Healthcare" },
  { title: "Task Management", icon: CheckSquare, category: "Productivity" },
  { title: "Visitor Management", icon: ShieldCheck, category: "Security" },
];

export const SKILLS = [
  { name: "Kubernetes", level: "Expert", icon: Layers, color: "text-blue-500" },
  { name: "Docker", level: "Expert", icon: Package, color: "text-cyan-500" },
  { name: "AWS", level: "Senior", icon: Cloud, color: "text-orange-500" },
  { name: "Terraform", level: "Expert", icon: Code2, color: "text-purple-500" },
  { name: "Huawei Cloud", level: "Senior", icon: Cloud, color: "text-red-400" },
  { name: "Jenkins", level: "Expert", icon: Workflow, color: "text-red-500" },
  { name: "Python", level: "Advanced", icon: Terminal, color: "text-yellow-500" },
  { name: "Bash", level: "Expert", icon: Cpu, color: "text-emerald-500" },
];
