import { useState } from "react";
import Card from "./components/Card";
import useFatch from "./hooks/useFatch";
import Pagination from "./components/pagination";

function App() {
  const pageSize = 4;

  const [page, setPage] = useState(1);
  const {response, isLoading} = useFatch({ page , pageSize });

  console.log(response);

  return (
    <div className="container pt-5">
      {!isLoading ? (
        <>
          <div className="row d-flex justify-content-center">
            {response.data?.map(({ id, ...programmer }) => {
              return (
                <div className="col-3" key={id}>
                  <Card {...programmer} />
                </div>
              );
            })}
          </div>
          <Pagination
            pages={Math.ceil(response.totalRecords / pageSize)}
            setPage={setPage}
            activepage={page}
          />
        </>
      ) : (
        <div className="d-flex justify-content-center">
          <div className="spinner-border"></div>
        </div>
      )}
    </div>
  );
}

export default App;
