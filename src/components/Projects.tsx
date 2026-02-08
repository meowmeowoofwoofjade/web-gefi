"use client";

import { useState } from "react";
import { MapPin, Zap, Info, X, Activity, Server, Maximize, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectData {
    name: string;
    location: string;
    capacity: string;
    image: string;
    specs: {
        configuration: string;
        inverters: string;
        pr?: string;
        specificProduction?: string;
        mounting?: string;
        dcAcRatio?: string;
        area?: string;
        annualYield?: string;
        dcCapacity?: string;
        acCapacity?: string;
        roofPotential?: string;
        status?: string;
    };
}

const projects: ProjectData[] = [
    {
        name: "HYUNDAI KEFICO VIETNAM",
        location: "Dai An Industrial Park, Hai Duong",
        capacity: "4.16 MWp", // Calculated from 5864 * 710Wp approx, or use client specific if given. Let's use modules * rating. 5864 * 710 = 4,163,440 Wp = 4.16 MWp
        image: "https://images.unsplash.com/photo-1592833159057-65a2845730bd?q=80&w=2070&auto=format&fit=crop",
        specs: {
            configuration: "5,864 PV Modules (710 Wp)",
            inverters: "25 x Huawei SUN2000-150K",
            pr: "85.15% (Verified by PVsyst)",
            specificProduction: "985 kWh/kWp/year",
            mounting: "Fixed planes (Tilts 6°)",
        },
    },
    {
        name: "LMS VINA",
        location: "Dai An Extended IP, Hai Duong",
        capacity: "3.17 MWp", // 4460 * 710 = 3,166,600
        image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop",
        specs: {
            configuration: "4,460 PV Modules (710 Wp)",
            inverters: "20 x SUN2000-150KTL-MGO",
            dcAcRatio: "1.05 (Optimized for efficiency)",
            area: "~27,000 m²",
            annualYield: "3,084 MWh/year",
        },
    },
    {
        name: "SUNGJIN NICE VIETNAM",
        location: "Ngoc Son IP, Hai Phong",
        capacity: "985.8 kWp",
        image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop",
        specs: {
            configuration: "1,590 PV Modules (620 Wp)",
            inverters: "6 x 150kW Inverters",
            dcCapacity: "985.8 kWp",
            acCapacity: "900 kW",
            area: "6,000 m²",
        },
    },
    {
        name: "KORTEK VINA",
        location: "Dong Van IV IP, Ninh Binh",
        capacity: "Potential ~10 MWp", // Estimate based on area relative to others? Or just leave as Potential
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1974&auto=format&fit=crop",
        specs: {
            configuration: "Huge Scale Potential",
            inverters: "to be determined",
            roofPotential: "70,579 m²",
            status: "Survey completed, Proposal phase",
        },
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Featured Projects</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Deep dive into our engineering excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: `url('${project.image}')` }}
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                            </div>

                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors min-h-[3.5rem]">
                                    {project.name}
                                </h3>

                                <div className="flex items-start text-gray-600 mb-2">
                                    <MapPin className="w-4 h-4 mr-2 text-primary mt-1 flex-shrink-0" />
                                    <span className="text-sm line-clamp-2">{project.location}</span>
                                </div>

                                <div className="flex items-center text-gray-600 mb-4">
                                    <Zap className="w-4 h-4 mr-2 text-yellow-500 flex-shrink-0" />
                                    <span className="text-sm font-medium">{project.capacity}</span>
                                </div>

                                <div className="mt-auto">
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 hover:bg-primary hover:text-white text-gray-700 font-medium rounded-lg transition-colors text-sm"
                                    >
                                        <Info size={16} />
                                        View Technical Data
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Technical Data Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
                            >
                                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                                    <h3 className="text-2xl font-bold text-gray-900">{selectedProject.name}</h3>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                <div className="p-6 md:p-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <SpecItem icon={<Server />} label="Modules" value={selectedProject.specs.configuration} />
                                        <SpecItem icon={<Activity />} label="Inverters" value={selectedProject.specs.inverters} />

                                        {selectedProject.specs.pr && (
                                            <SpecItem icon={<Zap />} label="Performance Ratio" value={selectedProject.specs.pr} />
                                        )}
                                        {selectedProject.specs.specificProduction && (
                                            <SpecItem icon={<Zap />} label="Specific Production" value={selectedProject.specs.specificProduction} />
                                        )}
                                        {selectedProject.specs.annualYield && (
                                            <SpecItem icon={<Zap />} label="Annual Yield" value={selectedProject.specs.annualYield} />
                                        )}
                                        {selectedProject.specs.mounting && (
                                            <SpecItem icon={<Maximize />} label="Mounting" value={selectedProject.specs.mounting} />
                                        )}
                                        {selectedProject.specs.dcAcRatio && (
                                            <SpecItem icon={<Activity />} label="DC/AC Ratio" value={selectedProject.specs.dcAcRatio} />
                                        )}
                                        {selectedProject.specs.area && (
                                            <SpecItem icon={<Maximize />} label="Installation Area" value={selectedProject.specs.area} />
                                        )}
                                        {selectedProject.specs.dcCapacity && (
                                            <SpecItem icon={<Zap />} label="DC Capacity" value={selectedProject.specs.dcCapacity} />
                                        )}
                                        {selectedProject.specs.acCapacity && (
                                            <SpecItem icon={<Zap />} label="AC Capacity" value={selectedProject.specs.acCapacity} />
                                        )}
                                        {selectedProject.specs.roofPotential && (
                                            <SpecItem icon={<Maximize />} label="Roof Potential" value={selectedProject.specs.roofPotential} />
                                        )}
                                        {selectedProject.specs.status && (
                                            <SpecItem icon={<Calendar />} label="Status" value={selectedProject.specs.status} />
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

function SpecItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
    return (
        <div className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
            <div className="p-2 bg-white rounded-lg shadow-sm text-primary mr-4">
                {icon}
            </div>
            <div>
                <p className="text-sm text-gray-500 font-medium mb-1">{label}</p>
                <p className="text-gray-900 font-semibold">{value}</p>
            </div>
        </div>
    );
}
