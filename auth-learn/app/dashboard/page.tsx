import React from 'react'

export default function page() {
  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome back
          </h1>
          <p className="text-gray-400">Manage your Solana projects and track your progress.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Stats Cards */}
          <div className="bg-gradient-to-br from-purple-800/50 to-purple-900/50 backdrop-blur-sm border border-purple-500/20 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-white mb-2">Active Projects</h3>
            <div className="text-3xl font-bold text-purple-400">12</div>
            <p className="text-sm text-gray-400 mt-1">+3 from last month</p>
          </div>

          <div className="bg-gradient-to-br from-green-800/50 to-green-900/50 backdrop-blur-sm border border-green-500/20 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-white mb-2">SOL Balance</h3>
            <div className="text-3xl font-bold text-green-400">234.56</div>
            <p className="text-sm text-gray-400 mt-1">≈ $5,432.10 USD</p>
          </div>

          <div className="bg-gradient-to-br from-blue-800/50 to-blue-900/50 backdrop-blur-sm border border-blue-500/20 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-white mb-2">Total Transactions</h3>
            <div className="text-3xl font-bold text-blue-400">1,847</div>
            <p className="text-sm text-gray-400 mt-1">Last 30 days</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Projects */}
          <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Recent Projects</h2>
            <div className="space-y-3">
              {['DeFi Lending Protocol', 'NFT Marketplace', 'Token Launchpad', 'Governance DAO'].map((project, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors cursor-pointer">
                  <div>
                    <h3 className="text-white font-medium">{project}</h3>
                    <p className="text-gray-400 text-sm">Last updated: 2 hours ago</p>
                  </div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-4 rounded-lg font-medium transition-all transform hover:scale-105">
                Deploy Contract
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white p-4 rounded-lg font-medium transition-all transform hover:scale-105">
                Create Token
              </button>
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white p-4 rounded-lg font-medium transition-all transform hover:scale-105">
                Mint NFT
              </button>
              <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white p-4 rounded-lg font-medium transition-all transform hover:scale-105">
                Start Staking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
