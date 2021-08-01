const Search = ({ onChange, onConfirm }) => {
  return (
    <>
      <div>
        <div className="form-control">
          <div className="relative w-96 mx-auto my-5">
            <input
              type="text"
              placeholder="Search for a beautiful place..."
              className="w-full pr-16 input input-primary input-bordered"
              defaultValue="New York, US"
              contentEditable
              onChange={onChange}
            />
            <button
              className="absolute top-0 right-0 rounded-l-none btn btn-primary"
              onClick={onConfirm}
            >
              go
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { Search };
