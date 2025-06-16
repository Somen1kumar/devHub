import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addDeveloperData } from '../../redux/reducer';
import Slider from "./utils/Slider";
import { TotalConstant } from './utils/constants';
import SearchBox from '../../packagesUi/searchBlock/index';
const Index = () => {
  const selector = useSelector((store) => store.userStore.isDarkTheme);
  const dispatch = useDispatch();
  const [developerData, setDeveloperData] = useState([]);
  const [deviceType, setDeviceType] = useState(1);
  const [developerFilterData, setDeveloperFilterData] = useState([]);
  const fetchData = async () => {
    const res = await fetch('https://26c902d6-9098-4ed4-a02c-81508090233b.mock.pstmn.io/developerList1');
    const json = await res.json();
    console.log(json);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    setDeveloperData(json?.developers || []);
    setDeveloperFilterData(json?.developers || []);
    dispatch(addDeveloperData(json?.developers || []));
  }
  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setDeviceType(1);
    } else if (width >= 768 && width < 1024) {
      setDeviceType(2);
    } else {
      setDeviceType(3);
    }
  };
  useEffect(() => {
    fetchData();
    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  },[]);
  const handleSearch = (searchTerm) => {
    if (searchTerm.toLowerCase() === "all skills") {
      setDeveloperFilterData(developerData);
      return;
    }
    const filteredData = developerData.filter((developer) => {
      return (
        developer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        developer.skills.some((skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    });
    setDeveloperFilterData(filteredData);
  }
  return (
    <div className="App text-center"> 
    {developerData.length > 0 && <div>
      <SearchBox
        handler={handleSearch}
        skills={TotalConstant.skills} />
      </div>}
      {developerFilterData.length > 0 && <Slider items={developerFilterData} itemsPerPage={deviceType} selector={selector} />}
    </div>
  )
}

export default Index
