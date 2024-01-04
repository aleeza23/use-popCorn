import React, { useEffect } from "react";

export const useKey = (key , action) => {
    //effect to manipulate dom/adding event listner to the doc
    useEffect(() => {
        const callback = (e) => {
          if (e.code === key) {
            action();
          }
        };
    
        document.addEventListener("keydown", callback);
        
        return () => {
          document.removeEventListener("keydown", callback);
        };
      }, [action, key]);
};


