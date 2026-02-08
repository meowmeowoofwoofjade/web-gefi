import { TrendingUp, Leaf, ShieldCheck, Users } from "lucide-react";

const coreValues = [
    {
        icon: <TrendingUp className="w-10 h-10 text-primary" />,
        title: "Good Investment",
        description: "Projects with clear financial foundations and stable cash flow.",
    },
    {
        icon: <Leaf className="w-10 h-10 text-primary" />,
        title: "Good Environment",
        description: "Priority given to clean energy and emission reduction.",
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-primary" />,
        title: "Good Governance",
        description: "Transparent management and risk control.",
    },
    {
        icon: <Users className="w-10 h-10 text-primary" />,
        title: "Good Partnership",
        description: "Long-term cooperation with professional investment funds.",
    },
];

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About GEFI Power</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        GEFI Power (Global Energy Finance Investment) is dedicated to the development of green energy in Vietnam.
                        Our mission is to accompany investment funds and factory owners in the sustainable energy transition,
                        creating value for all stakeholders while protecting our planet.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {coreValues.map((value, index) => (
                        <div
                            key={index}
                            className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center"
                        >
                            <div className="mb-4 p-3 bg-green-100 rounded-full">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                            <p className="text-gray-600 text-sm">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
