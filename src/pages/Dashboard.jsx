import axios from 'axios';
import { useEffect, useState } from 'react';
import { FiTrendingUp, FiArrowUpRight } from 'react-icons/fi';
import { MdPlayArrow, MdPause, MdStop } from 'react-icons/md';
import api from '../services/api';


const Dashboard = () => {
    const [data,setData]=useState()
    useEffect(()=>{
        const fetchDashboard = async()=>{
            try {
                const res = await api.get('/dashboard')
                setData(res.data)
                
            } catch (error) {
                console.log(error);
            }
        }
        fetchDashboard()
    },[])
    console.log(data);
    const stats = [
        { title: 'Total Projects', value: '24', trend: 'Increased from last month', color: 'bg-green-700' },
        { title: 'Ended Projects', value: '10', trend: 'Increased from last month', color: 'bg-white' },
        { title: 'Running Projects', value: '12', trend: 'Increased from last month', color: 'bg-white' },
        { title: 'Pending Project', value: '2', trend: 'On Discuss', color: 'bg-white' },
    ];

   

    return (
        <div className="flex-1 bg-gray-50 p-8 overflow-auto">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
                    <p className="text-gray-500">Plan, prioritize, and accomplish your tasks with ease.</p>
                </div>
                <div className="flex gap-3">
                    <button className="bg-green-700 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-green-800 flex items-center gap-2">
                        + Add Project
                    </button>
                    <button className="bg-white text-gray-700 px-6 py-2.5 rounded-lg font-medium border border-gray-300 hover:bg-gray-50">
                        Import Data
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <div key={index} className={`${stat.color} rounded-2xl p-6 ${stat.color === 'bg-green-700' ? 'text-white' : 'border border-gray-200'}`}>
                        <div className="flex items-center justify-between mb-4">
                            <span className={`text-sm font-medium ${stat.color === 'bg-green-700' ? 'text-green-100' : 'text-gray-600'}`}>
                                {stat.title}
                            </span>
                            <button className={`p-2 rounded-full ${stat.color === 'bg-green-700' ? 'bg-green-600' : 'bg-gray-100'}`}>
                                <FiArrowUpRight className="w-4 h-4" />
                            </button>
                        </div>
                        <div className={`text-5xl font-bold mb-2 ${stat.color === 'bg-green-700' ? 'text-white' : 'text-gray-900'}`}>
                            {stat.value}
                        </div>
                        <div className="flex items-center gap-2">
                            <FiTrendingUp className={`w-4 h-4 ${stat.color === 'bg-green-700' ? 'text-green-300' : 'text-green-600'}`} />
                            <span className={`text-xs ${stat.color === 'bg-green-700' ? 'text-green-100' : 'text-gray-500'}`}>
                                {stat.trend}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

           
        </div>
    );
};

export default Dashboard;