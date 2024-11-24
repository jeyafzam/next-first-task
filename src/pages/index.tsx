import { Button, Form } from "antd";
import { useRouter } from "next/router";
import "../styles/index.css";

const Home = () => {
  const router = useRouter();

  const handleButtonClick = (color: string) => {
    localStorage.setItem("headerColor", color);
    router.push("/second"); 
  };

  return (
    <div  className="home-content">
      <h1>Select Color</h1>

      
      <Form className="form">
        <Form.Item>
          <Button  className="button b-one" onClick={() => handleButtonClick("blue")}>
            Blue
          </Button>
        </Form.Item>
        
        <Form.Item>
          <Button  className="button b-tow" onClick={() => handleButtonClick("red")}>
            Red 
          </Button>
        </Form.Item>

        <Form.Item>
          <Button  className="button b-tree" onClick={() => handleButtonClick("yellow")}>
            Yellow 
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Home;
