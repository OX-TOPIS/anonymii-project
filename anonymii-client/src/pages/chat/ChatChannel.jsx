import React from 'react'

const ChatChannel = () => {
  return (
    <div className="w-3/4 bg-white ">

      {/* TOP TAB */}
      <div className="h-18 shadow-md p-2 flex flex-col justify-center">
        <h1 className="title">Thai education is bad</h1>
        <p className="text-blue1 h-6 overflow-hidden text-sm">
          Why Thai education is bad Why Thai education is bad
        </p>
      </div>

      {/* MESSAGE */}
      {/* chat-start */}
      <div className="chat chat-start pt-4">
        {/* Avatar */}
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        {/* Username and time */}
        <div className="chat-header">
        Obi-Wan Kenobi
        </div>
        {/* Message */}
        <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
      </div>

      {/* chat-end */}
      <div className="chat chat-end">
        {/* Avatar */}
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        {/* Username and time */}
        <div className="chat-header">
        Obi-Wan Kenobi
        </div>
        {/* Message */}
        <div className="chat-bubble bg-fa1">It was you who would bring balance to the Force</div>
      </div>
      



      {/* BOX INPUT MESSAGE */}
      <div className="flex justify-center">
      <input type="text" className='absolute bottom-0 bg-blue2 w-3/5 p-2 rounded-md outline-none '/>
      </div>
      
    </div>
  )
}

export default ChatChannel
