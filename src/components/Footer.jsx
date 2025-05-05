import { Link } from "react-router-dom";


function Footer(){
    return(
            <footer className="w-full py-6 border-t border-border">
              <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-2 text-center">
                <div className="text-center md:text-left">
                  <h3 className="font-bold text-lg  bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 dark:from-purple-400 dark:via-pink-300 dark:to-orange-300">
                    Oratile Segoenyane
                  </h3>
                  <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} All rights reserved.</p>
                </div>
        
              
              </div>
            </footer>
    )

}
export default Footer