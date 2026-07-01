"use client";



export default function SubscribeButton() {
  
  
 
  const handleSubscribe = () => {
    
    alert("Thanks for following us and be the first one to get latest updates <3");
  };

  return (
    <button 
      className="button2" 
      type="button" 
      onClick={handleSubscribe}
    >
      subscribe now
    </button>
  );
}