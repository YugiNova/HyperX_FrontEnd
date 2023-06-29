import { Tabs, TabsProps } from "antd";
import { CustomTabs } from "./styles";
import Desciption from "./Description";
import Information from "./Information";
import Promotions from "./Promotions";
import Reviews from "./Reviews";
import { useSelector } from "react-redux";
import { getTheme } from "../../../redux/selectors";


const InfoTabs:React.FC = () => {
    const theme = useSelector(getTheme)

    const onChange = (key: string) => {
        console.log(key);
      };
      
      const items: TabsProps['items'] = [
        {
          key: 'desciption',
          label: `Desciption`,
          children: <Desciption/>,
        },
        {
          key: 'information',
          label: `Information`,
          children: <Information/>,
        },
        {
          key: 'promotion',
          label: `Promotion`,
          children: <Promotions/>,
        },
        {
            key: 'reviews',
            label: `Reviews`,
            children: <Reviews/>,
          },
      ];

    return(
        <CustomTabs theme={theme} centered defaultActiveKey="1" items={items} onChange={onChange} />
    )
}

export default InfoTabs;