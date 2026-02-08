import { Factory, Coins, Settings, CheckCircle } from "lucide-react";

export default function BusinessModel() {
    return (
        <section id="model" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Cooperation Model</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A seamless three-party partnership designed to maximize value for all stakeholders.
                    </p>
                </div>

                {/* The 3-Party Model Diagram */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 relative">
                    {/* Connecting Line (Desktop only) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 -translate-y-1/2 z-0"></div>

                    {/* Party 1: Customer */}
                    <div className="relative z-10 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                            <Factory className="w-10 h-10 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Factory Owner</h3>
                        <p className="text-gray-500 font-medium mb-4">(The Customer)</p>
                        <div className="bg-blue-50 px-4 py-2 rounded-lg text-blue-700 font-medium text-sm">
                            Provides Rooftop Area
                        </div>
                    </div>

                    {/* Party 2: GEFI */}
                    <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl border-2 border-primary/20 flex flex-col items-center text-center transform scale-105">
                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                            <Settings className="w-12 h-12 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-2">GEFI Power</h3>
                        <p className="text-gray-500 font-medium mb-4">(The Connector)</p>
                        <div className="bg-primary/10 px-4 py-2 rounded-lg text-primary font-medium text-sm">
                            Manages Operations
                        </div>
                    </div>

                    {/* Party 3: Investor */}
                    <div className="relative z-10 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center mb-6">
                            <Coins className="w-10 h-10 text-yellow-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Investment Fund</h3>
                        <p className="text-gray-500 font-medium mb-4">(The Funder)</p>
                        <div className="bg-yellow-50 px-4 py-2 rounded-lg text-yellow-700 font-medium text-sm">
                            Provides Capital 100%
                        </div>
                    </div>
                </div>

                {/* Benefits */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                    <h3 className="text-2xl font-bold text-center mb-10">Key Benefits for Factory Owners</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-green-100 p-3 rounded-full mb-4">
                                <CheckCircle className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">Zero Capital Investment</h4>
                            <p className="text-gray-600">
                                You don't need to spend any money. The investment fund covers 100% of the installation and maintenance costs.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-green-100 p-3 rounded-full mb-4">
                                <CheckCircle className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">Lower Electricity Costs</h4>
                            <p className="text-gray-600">
                                Purchase solar electricity at a lower rate than the national grid, significantly reducing operating expenses.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-green-100 p-3 rounded-full mb-4">
                                <CheckCircle className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">Green Brand Image</h4>
                            <p className="text-gray-600">
                                Enhance your corporate image and meet green energy standards required by international partners.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
