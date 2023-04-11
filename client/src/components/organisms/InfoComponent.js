import { useContext } from "react";
import { Card } from "react-bootstrap";
import { AppContext } from "../../context/AppContext";
function InfoComponent() {
  const { error } = useContext(AppContext);
  return (
    <div className="flex justify-center  w-full">
      <Card className="w-full max-w-lg">
        <Card.Body>
          <Card.Title className="text-amber-800	text-center">No data</Card.Title>
          <div>
            {error ? (
              <>
                <Card.Text className="text-amber-800 text-center">
                  {error}
                </Card.Text>
                <Card.Text className="text-center">Try refresh page</Card.Text>
              </>
            ) : (
              <>
                <Card.Text>
                  No data displayed? Api service is deployed onrender{" "}
                  <Card.Link href="https://render.com/">render.com</Card.Link>{" "}
                  site, free trial, sometimes it takes while to get data, please
                  wait several sec, or try refresh page.
                </Card.Text>
                <Card.Text>
                  Api is deployed under this link{" "}
                  <Card.Link href="https://customers-api-sgd5.onrender.com/">
                    https://customers-api-sgd5.onrender.com/
                  </Card.Link>{" "}
                  Data is saved in MongoDB
                </Card.Text>
              </>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default InfoComponent;
