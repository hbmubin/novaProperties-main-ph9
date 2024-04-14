import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <Helmet>
        <title>Nova/property</title>
      </Helmet>
      Card Details {id}
    </div>
  );
};

export default CardDetails;
