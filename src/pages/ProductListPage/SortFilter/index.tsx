import { Select } from "antd";
import { Container, Title } from "./styles";

const SortFilter = () => {
    const handleChange = (value: { value: string; label: React.ReactNode }) => {
        console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
      };

    return (
        <Container>
            <Title>Order by:</Title>
            <Select
                labelInValue
                defaultValue={{ value: "nameDesc", label: "Name from A to Z" }}
                style={{ width: "auto",marginLeft: "1rem" }}
                onChange={handleChange}
                options={[
                    {
                        value: "nameDesc",
                        label: "Name from A to Z",
                    },
                    {
                        value: "nameAsc",
                        label: "Name from Z to A",
                    },
                ]}
            />

            <Select
                labelInValue
                defaultValue={{ value: "priceDesc", label: "Price Descending" }}
                style={{ width: "auto",marginLeft: "1rem"  }}
                onChange={handleChange}
                options={[
                    {
                        value: "priceDesc",
                        label: "Price Descending",
                    },
                    {
                        value: "priceAsc",
                        label: "Price Ascending",
                    },
                ]}
            />
        </Container>
    );
};

export default SortFilter;