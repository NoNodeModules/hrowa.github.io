import React from 'react'
import styled from 'styled-components'
import {About} from '../styles'
import Toggle from './Toggle'
import {AnimateSharedLayout} from 'framer-motion'
import { UseScroll } from "./useScroll";
import {fade} from '../animation'

const FaqSection = () => {
    const [element, controls] = UseScroll();
    return(
        <Faq variants={fade} ref={element} animate={controls} initial="hidden">
            <h2>Any Questions?</h2>
            <AnimateSharedLayout>
            <Toggle title="How Do I Start?">
                <div className="answer ">
                    <p>lorem ipsum dolor sit amet.</p>
                    <p>lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet</p>
                </div>
            </Toggle>
            <Toggle title="Daily Schedule">
                <div className="answer ">
                    <p>lorem ipsum dolor sit amet.</p>
                    <p>lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet</p>
                </div>
            </Toggle>
            <Toggle title="Different payment methods">
                <div className="answer ">
                    <p>lorem ipsum dolor sit amet.</p>
                    <p>lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet</p>
                </div>
            </Toggle>
            <Toggle title="What product do you offer">
                <div className="answer ">
                    <p>lorem ipsum dolor sit amet.</p>
                    <p>lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet</p>
                </div>
            </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
};

const Faq = styled(About)`
display: block;
span{
    display: block;
}
h2{
    padding-bottom: 2rem;
    font-weight: lighter;
}
h4{
    font-weight: bold;
    font-size: 2rem;
}
.faq-line{
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
}
.question{
    padding: 3rem 0rem;
    cursor: pounter;
}
.answer{
    padding: 2rem 0rem;
}
p{
    padding: 1rem 0rem;
}
`;

export default FaqSection;