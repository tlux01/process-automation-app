function RefreshSpinner() {
    return (
            <div className="flex items-center justify-content-center">
              <div
                className="spinner-grow text-gray-400 spinner-grow-sm me-1"
                role="status"
              ></div>
              <p className="m-0">Loading... </p>
            </div>
    )
}

export default RefreshSpinner