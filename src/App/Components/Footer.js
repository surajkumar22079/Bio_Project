import React from 'react';
import styled from "styled-components";
function Footer() 
{
    return (
            <Container>
                <Upper>
                    <Upperitems>
                        <Heading>Not for me, but for the Nation</Heading>
                        <p>With a vision to spread social harmony across and evolve student youth as accomplished social leaders and administrators, NSS IIT Roorkee believes in 'Striving for the betterment of our motherland by fully indulging ourselves in the service of mankind.'</p>
                    </Upperitems>
                    <Upperitems>
                        <Heading>Contact Us</Heading>
                        <Items>
                        <Contacts href="tel:+919877247661"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 "><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        </Contacts>
                        <div>+91-9877247661</div>
                        </Items>
                        <Items>
                        <Contacts href="mailto:nss@ee.iitr.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 "><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </Contacts>
                        <div>nss@iitr.ac.in</div>
                        </Items>
                        <Items>
                            <Contacts href="https://www.google.com/maps/place/NSS+Office/@29.8673809,77.8945108,17z/data=!4m5!3m4!1s0x390eb364876ca12d:0x23a45c97a582c98c!8m2!3d29.8701479!4d77.8966617"  target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 "><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </Contacts>
                        <div>NSS Office, 2nd floor, Multi Activity Centre, IIT Roorkee, 247667</div>
                        </Items>
                    </Upperitems>
                </Upper>
                <Line/>
                <Lower>
                    <Links href="https://www.facebook.com/nssiitr" target="blank" rel="noreferrer" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-md-5 mr-4 th-footer-icon"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                    </Links>
                    <Links href="https://twitter.com/NSS_IITR?s=09" target="blank" rel="noreferrer" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-md-5 mr-4 th-footer-icon"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                    </Links>
                    <Links href="https://www.instagram.com/nssiitr/" target="blank" rel="noreferrer" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-md-5 mr-4 th-footer-icon"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </Links>
                    <Links href="https://www.linkedin.com/company/nssiitr/mycompany/" target="blank" rel="noreferrer" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-md-5 mr-4 th-footer-icon"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </Links>
                    <Links href="https://www.youtube.com/channel/UCOwle_PBTdDRQC4HCJijBKA" target="blank" rel="noreferrer" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-md-5 mr-3 th-footer-icon"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                        </svg>
                    </Links>
                </Lower>
            </Container>
    )
}

export default Footer;

const Container = styled.div`
  font-size: 22px;
  font-family: "Poppins", sans-serif;
  background-color: #521e86;
  bottom: 0;
  position: relative;
  padding: 0px 44px;
`
const Upper = styled.div`
    padding:22px;
    display: grid;
  grid-template-columns: 55% 45%;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #eaeaea;
  text-align: justify;
  padding: 12px 2px;
  @media(max-width:544px)
{  display: flex;
    flex-direction: column;  
}
`
const Lower = styled.div`
align-items: center;
justify-content: center;
display: flex;
@media(max-width:544px)
{
    display: flex;
    flex-wrap: wrap;
}
`

const Upperitems = styled.div`
    padding:20px 20px;
`

const Items = styled.div`
    display: flex;
  flex-direction: row;
  padding: 12px 2px;
`
const Heading = styled.h2`
    font-size: 36px;
`

const Links = styled.a`
    margin: 22px 33px;
`

const Contacts = styled.a`
    padding: 0px 12px;
`
const Line= styled.hr`
/* border:2px solid white; */
color:white;
height:2px;
`