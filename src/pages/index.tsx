import { Button, Form } from "antd";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const handleButtonClick = (color: string) => {
    localStorage.setItem("headerColor", color);
    router.push("/second");
  };

  return (
    <div className="text-center mt-12">
      <h1 className="text-2xl font-bold">Select Color</h1>

      <Form className="flex justify-center mt-8">
        <Form.Item>
          <Button className="ant-btn" onClick={() => handleButtonClick("blue")}>
            Blue
          </Button>
        </Form.Item>

        <Form.Item>
          <Button
            className="ant-btn-dangerous"
            onClick={() => handleButtonClick("red")}
          >
            Red
          </Button>
        </Form.Item>

        <Form.Item>
          <Button
            className="yellow-btn"
            onClick={() => handleButtonClick("yellow")}
          >
            Yellow
          </Button>
        </Form.Item>
      </Form>
      
    </div>
  );
};

export default Home;
