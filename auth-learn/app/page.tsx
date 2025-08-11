import { useState } from 'react';
import { User, Menu, X, Zap, TrendingUp, Shield } from 'lucide-react';

const Page = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignIn = () => {
    // Simulate sign in
  };

  const handleRegister = () => {
    // Simulate registration

  };

  const handleLogout = () => {

  };

  const Navbar = () => (
    <nav className="bg-black/95 backdrop-blur-sm border-b border-purple-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                SolanaApp
              </div>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {!isAuthenticated ? (
                <>
                  <button
                    onClick={handleSignIn}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={handleRegister}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all transform hover:scale-105"
                  >
                    Register
                  </button>
                </>
              ) : (
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setCurrentPage('dashboard')}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Dashboard
                  </button>
                  <div className="relative group">
                    <button className="flex items-center space-x-2 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                      <User className="h-4 w-4" />
                      <span>Profile</span>
                    </button>
                    <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-1">
                        <div className="px-4 py-2 text-sm text-gray-400 border-b border-gray-700">
                          {userProfile?.}
                        </div>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 rounded-lg mt-2">
              {!isAuthenticated ? (
                <>
                  <button
                    onClick={handleSignIn}
                    className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white rounded-md text-base font-medium transition-colors"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={handleRegister}
                    className="block w-full text-left px-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-md text-base font-medium transition-all"
                  >
                    Register
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setCurrentPage('dashboard')}
                    className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white rounded-md text-base font-medium transition-colors"
                  >
                    Dashboard
                  </button>
                  <div className="px-3 py-2 text-gray-400 text-sm border-t border-gray-700">
                    {userProfile?.name}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white rounded-md text-base font-medium transition-colors"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <div className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
        </div>

        {/* Hero Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
              Build on Solana
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience lightning-fast transactions and revolutionary DeFi solutions on the world's most performant blockchain. 
              Join thousands of developers building the future of decentralized finance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button
                onClick={handleRegister}
                className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-2xl"
              >
                <span className="relative z-10">Start Building Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105">
                Explore Docs
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Feature cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <div className="bg-black/30 backdrop-blur-sm border border-purple-500/20 p-6 rounded-xl hover:bg-black/40 transition-all group">
                <Zap className="h-12 w-12 text-yellow-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-white mb-2">Ultra Fast</h3>
                <p className="text-gray-400">Process 65,000+ transactions per second with sub-second finality</p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm border border-purple-500/20 p-6 rounded-xl hover:bg-black/40 transition-all group">
                <TrendingUp className="h-12 w-12 text-green-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-white mb-2">Low Cost</h3>
                <p className="text-gray-400">Transaction fees under $0.01 - build without worrying about costs</p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm border border-purple-500/20 p-6 rounded-xl hover:bg-black/40 transition-all group">
                <Shield className="h-12 w-12 text-blue-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-white mb-2">Secure</h3>
                <p className="text-gray-400">Battle-tested security with a thriving ecosystem of validators</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

 

  return (
    <div className="min-h-screen">
      <Navbar />
     <LandingPage/>
    </div>
  );
};

export default Page;