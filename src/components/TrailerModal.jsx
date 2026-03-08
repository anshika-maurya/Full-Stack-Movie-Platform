function TrailerModal({ title, onClose }) {

  const youtubeUrl =
    `https://www.youtube.com/embed?listType=search&list=${title} trailer`;

  return (

    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">

      <div className="bg-black p-4 rounded-lg w-[800px]">

        <button
          onClick={onClose}
          className="text-white mb-3"
        >
          Close
        </button>

        <iframe
          width="100%"
          height="400"
          src={youtubeUrl}
          title="Trailer"
          allowFullScreen
        ></iframe>

      </div>

    </div>

  );
}

export default TrailerModal;