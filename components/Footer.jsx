export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <span>©
            {
            new Date().getFullYear()  }  AI Tour. All rights reserved.</span>
          <span>•</span>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            Privacy Policy
          </a>
          <span>•</span>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <span>Version 1.0.0</span>
        </div>
      </div>
    </footer>
  )
}



