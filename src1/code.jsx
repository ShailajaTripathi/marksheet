import { decode } from "html-entities";

export default function Code(props) {
  const { handleDelete, notes, getNoteDetails } = props;

  return (
    <>
      {notes.length === 0 ? (
        <div class="row d-flex justify-content-center " key={0}>
          <div class="h5">No records available</div>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4 html-decode">
          {notes.map((note) => (
            <div className="col">
              <div className="card rounded-3 shadow-sm ">
                <div className="card-header">
                  <h5>{decode(note.title)}</h5>
                </div>
                <div className="card-body">
                  <h6>
                    Date:
                  </h6>
                  <p>{decode(note.description)}</p>
                </div>
                <div className="card-footer">
                  <div className="my-1">
                    <button
                      className="me-2 btn btn-warning"
                      onClick={(e) => getNoteDetails(note.note_id, e)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => handleDelete(note.note_id, e)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}