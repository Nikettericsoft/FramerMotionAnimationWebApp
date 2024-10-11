import './App.css';
import AnimatedButton from "./components/button/ButtonComponent.tsx";
import FadeIn from "./components/fade-in-out-component/FadeInOutComponent.tsx";
import React, {useState} from "react";
import SlideIn from "./components/slide/SlideComponent.tsx";
import Modal from "./components/modal/Modal.tsx";
import HoverCard from "./components/hover-card/HoverCardComponent.tsx";
import Accordion from "./components/accordion/AccordionComponent.tsx";
import StaggeredList from "./components/staggered-list/StaggeredListComponent.tsx";
import RotatingLoader from "./components/rotating-loader/RotatingLoader.tsx";
import DraggableCard from "./components/draggable-card/DraggableCard.tsx";
import Bounce from "./components/bounce-animation/Bounce.tsx";
import ColorfulSpinner from "./components/colorful-spinner/ColorfulSpinner.tsx";
import WavingHand from "./components/waving-hand/WavingHand.tsx";
import Tabs from "./components/tabs/Tabs.tsx";
import ProgressBar from "./components/progress-bar/ProgressBar.tsx";
import Pagination from "./components/pagination-component/PaginationComponent.tsx";
import Carousel from "./components/carousel/CarouselComponent.tsx";
import InputComponent from "./components/input-component/InputComponent.tsx";
import Stepper from "./components/steppper-component/StepperComponent.tsx";
import SearchBar from "./components/searchbar/SearchBarComponent.tsx";
import Sidebar from "./components/sidebar/SideBarComponent.tsx";

function App() {
    const [componentName, setComponentName] = React.useState<string>("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10; // Adjust total pages as needed
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        console.log(`Current Page: ${page}`); // You can replace this with your logic
    };
    // Simulate progress increment
    const incrementProgress = () => {
        setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 100));
    };
    const decrementProgress = () => {
        setProgress((prevProgress) => (prevProgress > 0 ? prevProgress - 10 : 0));
    };
    const tabs = [
        {label: 'Tab 1', content: <div>Content for Tab 1</div>},
        {label: 'Tab 2', content: <div>Content for Tab 2</div>},
        {label: 'Tab 3', content: <div>Content for Tab 3</div>},
    ];

    const images = [
        'https://via.placeholder.com/600x400/3498db/ffffff?text=Slide+1',
        'https://via.placeholder.com/600x400/2ecc71/ffffff?text=Slide+2',
        'https://via.placeholder.com/600x400/e74c3c/ffffff?text=Slide+3',
    ];

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSearch = (query: string) => {
        alert(`Search query: ${query}`);
    };

    const steps = [
        {
            label: 'Step 1',
            content: <div>Content for Step 1</div>,
        },
        {
            label: 'Step 2',
            content: <div>Content for Step 2</div>,
        },
        {
            label: 'Step 3',
            content: <div>Content for Step 3</div>,
        },
        {
            label: 'Step 4',
            content: <div>Content for Step 4</div>,
        },
        {
            label: 'Step 5',
            content: <div>Content for Step 5</div>,
        },
        {
            label: 'Step 6',
            content: <div>Content for Step 6</div>,
        },
    ];

    const links = [
        {name: 'Home', path: '/'},
        {name: 'About', path: '/about'},
        {name: 'Services', path: '/services'},
        {name: 'Contact', path: '/contact'},
    ];

    return (
        <>
            <div>
                <div style={{display: "flex", justifyContent: "space-evenly", marginTop: "20px"}}>
                    <AnimatedButton name={"Open Sidebar"} onClick={() => {
                        setIsSideBarOpen(true)
                    }}/>
                    <FadeIn>
                        <AnimatedButton name={"Slide"} onClick={() => {
                            setComponentName("Slide")
                        }}/>
                    </FadeIn>
                    <FadeIn>
                        <AnimatedButton name={"Modal"} onClick={() => {
                            setComponentName("Modal");
                            setIsModalOpen(true)
                        }}/>
                    </FadeIn>
                    <FadeIn>
                        <AnimatedButton name={"Hover Card"} onClick={() => {
                            setComponentName("Hover-Card")
                        }}/>
                    </FadeIn>
                    <FadeIn>
                        <AnimatedButton name={"Accordion"} onClick={() => {
                            setComponentName("accordion")
                        }}/>
                    </FadeIn>
                    <FadeIn>
                        <AnimatedButton name={"Staggered List"} onClick={() => {
                            setComponentName("staggered-list")
                        }}/>
                    </FadeIn>
                    <FadeIn>
                        <AnimatedButton name={"Rotating Loader"} onClick={() => {
                            setComponentName("rotating")
                        }}/>
                    </FadeIn>
                    <FadeIn>
                        <AnimatedButton name={"Draggable Card"} onClick={() => {
                            setComponentName("draggable-card")
                        }}/>
                    </FadeIn>
                </div>
                <div style={{display: "flex", justifyContent: "space-evenly", marginTop: "20px"}}>
                    <FadeIn>
                        <AnimatedButton name={"Bounce"} onClick={() => {
                            setComponentName("Bounce")
                        }}/>
                    </FadeIn>
                    <FadeIn>
                        <AnimatedButton name={"Colorful Loader"} onClick={() => {
                            setComponentName("colorful-loader")
                        }}/>
                    </FadeIn>
                    <FadeIn>
                        <AnimatedButton name={"Waving Hand"} onClick={() => {
                            setComponentName("waving-hand")
                        }}/>
                    </FadeIn>
                    <FadeIn>
                        <AnimatedButton name={"Tabs"} onClick={() => {
                            setComponentName("tabs")
                        }}/>
                    </FadeIn>
                    <FadeIn>
                        <AnimatedButton name={"Progress Bar"} onClick={() => {
                            setComponentName("progress-bar")
                        }}/>
                    </FadeIn>
                    <FadeIn>
                        <AnimatedButton name={"Pagination"} onClick={() => {
                            setComponentName("pagination")
                        }}/>
                    </FadeIn>
                    <FadeIn>
                        <AnimatedButton name={"Carousel"} onClick={() => {
                            setComponentName("carousel")
                        }}/>
                    </FadeIn>
                    <FadeIn>
                        <AnimatedButton name={"Input"} onClick={() => {
                            setComponentName("input")
                        }}/>
                    </FadeIn>
                    <FadeIn>
                        <AnimatedButton name={"Stepper"} onClick={() => {
                            setComponentName("stepper")
                        }}/>
                    </FadeIn>
                    <FadeIn>
                        <AnimatedButton name={"Search Bar"} onClick={() => {
                            setComponentName("search-bar")
                        }}/>
                    </FadeIn>
                </div>

            </div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "500px"}}>
                <Sidebar links={links} isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen}/>
                {componentName === "Slide" && <>
                    <SlideIn direction={"left"}>
                        <div className={'card'}>
                            Slide left Card
                        </div>
                    </SlideIn>
                </>}
                {componentName === "Modal" && <>
                    <Modal isOpen={isModalOpen} onClose={() => {
                        setIsModalOpen(false);
                    }}>

                        <div className={'card'}>
                            Modal Card
                        </div>
                    </Modal>
                </>}
                {componentName === "Hover-Card" && <>
                    <HoverCard>
                        <SlideIn direction={"right"}>
                            <div className={'card'}>
                                Hover Card
                            </div>
                        </SlideIn>
                    </HoverCard>
                </>}
                {
                    componentName === "accordion" && <>
                        <Accordion title={"Fruits Details"} content={"Apple"}/>
                    </>
                }

                {
                    componentName === "staggered-list" && <>
                        <SlideIn direction={"left"}>
                            <div className={'card'}>
                                <StaggeredList items={['Apple', 'Orange', 'Banana', 'Guava', 'Pineapple']}/>
                            </div>
                        </SlideIn>
                    </>
                }

                {
                    componentName === "rotating" && <>
                        <div className={'card'}>
                            <RotatingLoader/>
                        </div>
                    </>
                }

                {
                    componentName === "draggable-card" && <>
                        <DraggableCard></DraggableCard>
                    </>
                }

                {
                    componentName === "Bounce" && <>
                        <Bounce/>
                    </>
                }
                {
                    componentName === "colorful-loader" && <>
                        <ColorfulSpinner/>
                    </>
                }
                {
                    componentName === "waving-hand" && <>
                        <WavingHand/>
                    </>
                }
                {
                    componentName === "tabs" && <>
                        <Tabs tabs={tabs}/>
                    </>
                }
                {
                    componentName === "progress-bar" && <>
                        <div style={{minWidth: "300px"}}>
                            <div style={{
                                marginBottom: "10px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <AnimatedButton name={"-"} onClick={decrementProgress}/>
                            </div>
                            <ProgressBar progress={progress} color="#27ae60"/>
                            <div style={{
                                marginTop: "10px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <AnimatedButton name={'+'} onClick={incrementProgress}/>
                            </div>
                        </div>
                    </>
                }
                {
                    componentName === "pagination" && <>
                        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
                    </>
                }
                {
                    componentName === "carousel" && <>
                        <Carousel images={images}/>
                    </>
                }
                {
                    componentName === "input" && <>
                        <InputComponent
                            label="Email"
                            placeholder="Enter your email"
                            validate={validateEmail}
                            errorMessage="Please enter a valid email address."
                        />
                    </>
                }
                {
                    componentName === "stepper" && <>
                        <Stepper steps={steps}/>
                    </>
                }
                {
                    componentName === "search-bar" && <>
                        <SearchBar placeholder="Search..." onSearch={handleSearch}/>
                    </>
                }

            </div>
        </>
    )
}

export default App
