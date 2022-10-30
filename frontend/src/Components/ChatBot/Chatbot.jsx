import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            gender: '',
            age: '',
        };
    }

    componentWillMount() {
        const { steps } = this.props;
        const { name, gender, age } = steps;

        this.setState({ name, gender, age });
    }

    render() {
        const { name, gender, age } = this.state;
        return (
            <div style={{ width: '100%' }}>
                <h3>Summary</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{name.value}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>{gender.value}</td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td>{age.value}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

Review.propTypes = {
    steps: PropTypes.object,
};

Review.defaultProps = {
    steps: undefined,
};

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Arial',
    headerBgColor: 'linear-gradient(315deg, #9E9E9E 0%, #D3D3D3 74%)',
    headerFontColor: 'black',
    headerFontSize: '1.1rem',
    botBubbleColor: '#D3D3D3',
    botFontColor: '#000',
    userBubbleColor: '#023e84',
    userFontColor: '#fff',
};
class SimpleForm extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <ChatBot
                    headerTitle="Welcome to Trendsetters"
                    speechSynthesis={{ enable: true, lang: 'en' }}
                    steps={[
                        {
                            id: '1',
                            message: 'How may I help you ?',
                            trigger: 'list',
                        },
                        {
                          id: 'list',
                          options: [
                            { value: 'whats-new', label: '1. Whats New', trigger: 'what-new' },
                            { value: 'trend-talks', label: '2. Latest Trend Talks', trigger: 'trend-talk' },
                            { value: 'whow-to-be-part', label: '3. How to be part of TrendSetters Community ', trigger: 'part-community' },
                            { value: 'whats-your-style', label: '4. Tell us your style', trigger: 'your-style' },
                            { value: 'thank-you', label: '5. Exit', trigger: 'thanks' },
                            ],
                          
                        },
                        {
                            id:'what-new',
                            message:'Flat 50% off on LG Products',
                            trigger:'latest-news-1'
                        },
                        {
                            id:'trend-talk',
                            message:'Senegalese-born Khaby Lame also began his social fame on TikTok🎇.',
                            trigger:'trend-talk-1'
                        },
                        {
                            id:'part-community',
                            message:'Come join us on our Social Media Platforms',
                            trigger:'contact-us'
                        },
                        {
                            id:'your-style',
                            message:'You have an Awesome style !!😍',
                            end: true,
                        },
                        
                        {
                            id:'thanks',
                            message:'Thank you for your kind interaction 😊!!',
                            end: true,
                        },
                        {
                            id:'latest-news-1',
                            message:'Get exclusive fine stitched Raymond prducts starting from just ₹799/- on Filpkart',
                            trigger:'latest-news-2'
                        },
                        {
                            id:'latest-news-2',
                            message:'We are back with new stocks of Biba Women wear',
                            trigger:'latest-news-3'
                        },
                        {
                            id:'latest-news-3',
                            message:'Buy an Iphone 13 at just ₹60k on Flipkart today !! Offer valid till 2nd August',
                            trigger:'latest-news-4'
                        },
                        {
                            id:'latest-news-4',
                            message:'Shop now !! Before the end of Big Billion Days',
                            trigger:'latest-news-5'
                        },
                        {
                            id:'latest-news-5',
                            message:'What more now !!',
                            trigger:'list'
                        },
                        {
                            id:'trend-talk-1',
                            message:'Addison Rae is an American social media personality and dancer✨. She first became well-known on social media for posting dance videos on TikTok, which is still her largest platform.',
                            trigger:'trend-talk-2'
                        },
                        {
                            id:'trend-talk-2',
                            message:'Although best known for his YouTube channel, Felix Arvid Ulf Kjellberg (aka PewDiePie)⭐ has also built a strong Instagram following, with more than 21 million followers.  ',
                            trigger:'latest-news-5'
                        },
                        {
                            id:'contact-us',
                            message:'Phone - +91 1234567891',
                            trigger:'email'
                        },
                        {
                            id:'email',
                            message:'Email - info@trensetters.com',
                            trigger:'address'
                        },
                        {
                            id:'address',
                            message:'Follow us on Instagram - @infosetters_.',
                            trigger:'latest-news-5'
                        },


                        /*{
                            id: 'age',
                            user: true,
                            trigger: '7',
                            validator: (value) => {
                                if (isNaN(value)) {
                                    return 'value must be a number';
                                } else if (value < 0) {
                                    return 'value must be positive';
                                } else if (value > 120) {
                                    return `${value}? Come on!`;
                                }

                                return true;
                            },
                        },
                        {
                            id: '7',
                            message: 'Great! Check out your summary',
                            trigger: 'review',
                        },
                        {
                            id: 'update-question',
                            options: [
                                { value: 'yes', label: 'Yes', trigger: 'update-yes' },
                                { value: 'no', label: 'No', trigger: 'end-message' },
                            ],
                        },
                        {
                            id: 'update-yes',
                            message: 'What field would you like to update?',
                            trigger: 'update-fields',
                        },
                        {
                            id: 'update-fields',
                            options: [
                                { value: 'name', label: 'Name', trigger: 'update-name' },
                                { value: 'gender', label: 'Gender', trigger: 'update-gender' },
                                { value: 'age', label: 'Age', trigger: 'update-age' },
                            ],
                        },
                    
                        {
                            id:'points-no',
                            message:'Thank you for your kind interaction !!',
                            end: true,
                        },
                        {
                            id:'points-yes',
                            message:'You have 245 points !!!',
                            end: true,
                        }*/


                    ]}
                />
            </ThemeProvider>
        );
    }
}

export default SimpleForm;