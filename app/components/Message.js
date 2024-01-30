
const Message = ({ message, isUser }) => {
  let containerClass = "bg-gray-50";
  if (isUser) {
    containerClass = "";
  }

  if (Array.isArray(message)) {
    message = message.join("");
  }

  if (!message || message === "") {
    return null;
  }

  return (
    <div
      className={`flex gap-x-4 rounded-md ${containerClass} py-5 px-5 mb-12`}
    >
      {isUser ? (
        <span className="text-xl sm:text-2xl" title="user">
          ⚓
        </span>
      ) : (
        <span className="text-xl sm:text-2xl" title="AI">
          🌴
        </span>
      )}

      <div className="flex flex-col text-sm sm:text-base flex-1 gap-y-4 mt-1">
        {message.split("\n").map(
          (text, index) =>
            text.length > 0 && (
              <span key={index} className="min-w-0">
                {text}
              </span>
            )
        )}
      </div>
    </div>
  );
};

export default Message;

/*import Image from 'next/image';


const userImageSrc = "/static/images/user.png";
const aiImageSrc = "/static/images/bot.png";

const Message = ({ message, isUser }) => {
  let containerClass = "bg-grenn-50 text-white ml-auto max-w-3xl rounded-md px-5 py-5 mb-12";
  if (isUser) {
    containerClass = "";
  }

  if (Array.isArray(message)) {
    message = message.join("");
  }

  if (!message || message === "") {
    return null;
  }

  return (
    <div className={`flex gap-x-4 rounded-md ${containerClass} py-5 px-5 mb-12`}>
      {isUser ? (
        <div className="user-image-container">
          <Image src={userImageSrc} alt="User" width={40} height={40} />
        </div>
      ) : (
        <div className="ai-image-container">
          <Image src={aiImageSrc} alt="AI" width={40} height={40} />
        </div>
      )}

      <div className="flex flex-col text-sm sm:text-base flex-1 gap-y-4 mt-1">
        {message.split("\n").map(
          (text, index) =>
            text.length > 0 && (
              <span key={index} className="min-w-0">
                {text}
              </span>
            )
        )}
      </div>
    </div>
  );
};

export default Message;*/