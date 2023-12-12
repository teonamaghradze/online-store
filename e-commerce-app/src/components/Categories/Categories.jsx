import { Link } from "react-router-dom";
import "./Categories.scss";

function Categories() {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src={
              "https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src={
              "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
          />

          <button>
            <Link className="link" to="/products/1">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src={
              "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
          />

          <button>
            <Link className="link" to="/products/1">
              Men
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-large">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src={
                  "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt=""
              />

              <button>
                <Link className="link" to="/products/1">
                  Children
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src={
                  "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt=""
              />

              <button>
                <Link className="link" to="/products/1">
                  Shoes
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src={
              "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
          />

          <button>
            <Link className="link" to="/products/1">
              Accessories
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories;
