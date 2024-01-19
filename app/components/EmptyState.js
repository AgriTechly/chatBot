export default function EmptyState({ setOpen, setPrompt }) {
  return (
    <div className="mt-12 sm:mt-24 space-y-6 text-gray-400 text-base mx-8 sm:mx-4 sm:text-2xl leading-12">
      <p>
        {" "}
        AgriChat is the assistant chatbot for your AgriTechly Platform.
      </p>
      <p>
        I can{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "Give some general agriculture advices."
            )
          }
        >
          give advice.
        </button>
        , have a deep understanding of the latest{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(" what are latest farming techniques, crop management strategies, and animal husbandry practices? ")
          }
        >
         farming techniques,
        </button>{" "}
        crop management strategies, and animal husbandry practices
        and willing to {" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "give a general advice on how to improve the soil health of some farms in mena region."
            )
          }
        >
          help 
        </button>
        , farmers and agricultural businesses adopt environmentally friendly practices that promote soil health {" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "give an advice on how to improve the yield of some farms in mena region."
            )
          }
        >
          biodiversity  
        </button>
         ,and efficient{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "give an advice on how to improve the water use of some farms in mena region."
            )
          }
        >
          water use.
        </button>{" "}
      </p>
      <p>Send me a message.</p>
    </div>
  );
}
