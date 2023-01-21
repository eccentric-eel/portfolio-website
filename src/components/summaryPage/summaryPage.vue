<template>
    <div style="width: 100vw;">
    <div style="max-width: 80rem; margin: 0 auto; padding: 1rem; text-align: justify;">
    <section id="profile">
        <div id="profileText">
            <h1>Brandon Sterling</h1>
            <h4>Full Stack Web Developer <span>&bull;</span> Software Developer</h4>

            <span id="profileImg__inline" style="float: right; margin: 0 0 .4rem 1rem;">
                <div class="lds-grid">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <img v-show="showProfileImg" src="../../assets/profile.jpg" @load="profileImgLoaded" alt="Profile Image" id="profileImg__inline" height="500">
            </span>

            <p>
                With experience building everything from small portfolio websites like this one to multi-million dollar ERP systems, I've
                built-up a strong skill set in creating beautiful, reactive, and full-featured web applications. I've leaned heavily towards a Laravel - SQL - Vue
                development stack and have experience integrating with technologies such as Stripe and the Google Places API. I've managed and maintained multiple cloud-based applications on AWS, in particular by utilizing features
                such as EC2, S3, Elastic Beanstalk and SES.
            </p>

            <p>
                Born in the United States, I'm an avid traveller and have spent time living in Japan, Italy, New Zealand and Australia. I'm currently employed 
                at Slipstream Advantage and based in Sydney.
            </p>

            <div id="profileLinks">
                <a href="https://linkedin.com/in/brandon-sterling" class="linkedin" target="_blank" rel="noreferrer">
                    linkedin.com/in/brandon-sterling
                </a>
                <span class="email">bsterli92@gmail.com</span>
            </div>
        </div>

        <span id="profileImg">
            <div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            <img v-show="showProfileImg" src="../../assets/profile.jpg" @load="profileImgLoaded" alt="Profile Image" id="profileImg" height="500">
        </span>
    </section>

    <section class="summarySection">
        <h2>Professional Experience</h2> 
        <div class="subSectionContainer">
            <div class="inner">
                <img src="../../assets/slipstream.jpg" alt="Slipstream Logo" class="slipstream" height="50">
                <h5>Slipstream Advantage</h5>
                <h5>Software Developer</h5>
            </div>
            <p>
                Currently focused on the development of a large, cloud-based CMS and logistics API system for the transport industry.
                Development stack includes SQL, Laravel, and Vue - with additional technologies including Vuetify and bootstrap. 
            </p>
        </div>
    </section>
    <section class="summarySection"> 
        <h2>Education</h2>
        <div class="subSectionContainer">
            <div class="inner">
                <img src="../../assets/temple.svg" alt="Temple Logo" class="temple" height="50">
                <h5>Temple University</h5>
                <h5>Bachelor of Science (Computer Science)</h5>
            </div>
            <p>
                Focus on web programming in PHP and game development in C++.
                Notable accomplishments include Dean's list freshman year and a study abroad semester in Tokyo, Japan.
            </p>
        </div>
    </section>
    <section class="summarySection"> <h2>Skills and Expertise</h2>
        <div class="subSectionContainer skillGrid">
            <span>Laravel</span>
            <span>Vue</span>
            <span>AWS</span>
            <span>Postman</span>
            <span>Atlassian</span>
        </div>
    </section>
    <section class="summarySection">
        <h2>Certifications</h2>
        <div class="certContainer">
            <div></div>
            <h5>Amazon Web Services</h5>
            <h5>Certified Cloud Practitioner</h5>
        </div>
    </section>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'summaryPage',
        data() {
            return {
                showProfileImg: false,
            }
        },
        methods: {
            profileImgLoaded() { this.showProfileImg = true }
        },
    }
</script>

<style lang="scss" scoped>
    #profile {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;

    }
    #profileImg__inline { display: none }
    #profileImg, #profileImg__inline {
        position: relative;
        height: 25rem;
        width: 25rem;
        background: #333333;

        img { border: 1px solid #666 }

        .lds-grid {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
    #profileText {
        flex: 1;
        margin-right: 2rem;
        text-align: center;

        h1 { font-size: 3.4rem }
        h4 { 
            margin-bottom: 1rem;
            font-weight: normal;
            color: #ccc;
        }
        p {
            margin: 1rem 0;
            line-height: 1.7;
            text-align: justify;
        }
    }
    #profileLinks {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        gap: 10px;
        white-space: nowrap;
        margin-top: 1.3rem;
        text-align: left;

        a {
            color: #fff;
            text-decoration: none;
        }

        .linkedin, .email {
            flex: 1;
            padding: 1rem 2rem 1rem 3rem;
            border-radius: 5px;
            border: 2px solid transparent;

            transition: .3s all;

            &:hover {
                border: 2px solid #ff00ff;
                cursor: pointer;
            }
        }
        .linkedin { background: #333 url(../../assets/linkedin.svg) no-repeat center left 1rem / auto 1.4rem }
        .email    { background: #333 url(../../assets/mail.svg) no-repeat center left 1rem / auto 1.3rem     }
    }
    .summarySection {
        margin: 3rem 0;
        color: #fff;
    }
    .subSectionContainer {
        margin: 1rem 2rem;

        h5 { 
            font-weight: normal;
            padding: 3px 0;
        }
        p {
            margin: .5rem 0;
            line-height: 1.5;
        }
        .inner {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 3.5rem;
            padding-left: 4.5rem;

            .temple, .slipstream { 
                position: absolute;
                left: 0;
                border-radius: .5rem;
                height: 3.5rem;
                width: auto;    
            }
        }
    }
    .certContainer {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 1rem 2rem;
        padding-left: 6rem;
        height: 5rem;

        div {
            position: absolute;
            left: 0;
            height: 5rem;
            width: 5rem;
            border-radius: 5rem;
            background: #fff url(../../assets/aws.svg) no-repeat center / auto 2rem;
        }
        h5 { 
            font-weight: normal;
            padding: 3px 0;
        }
        p {
            margin: .5rem 0;
            line-height: 1.5;
        }
    }
    .skillGrid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 2rem;
        column-gap: 5px;
        row-gap: 5px;

        span {
            text-align: center;
            line-height: 2rem;
            border: 1px solid #666;
            cursor: pointer;
        }
    }

.lds-grid {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-grid div {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  animation: lds-grid 1.2s linear infinite;
}
.lds-grid div:nth-child(1) {
  top: 8px;
  left: 8px;
  animation-delay: 0s;
}
.lds-grid div:nth-child(2) {
  top: 8px;
  left: 32px;
  animation-delay: -0.4s;
}
.lds-grid div:nth-child(3) {
  top: 8px;
  left: 56px;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(4) {
  top: 32px;
  left: 8px;
  animation-delay: -0.4s;
}
.lds-grid div:nth-child(5) {
  top: 32px;
  left: 32px;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(6) {
  top: 32px;
  left: 56px;
  animation-delay: -1.2s;
}
.lds-grid div:nth-child(7) {
  top: 56px;
  left: 8px;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(8) {
  top: 56px;
  left: 32px;
  animation-delay: -1.2s;
}
.lds-grid div:nth-child(9) {
  top: 56px;
  left: 56px;
  animation-delay: -1.6s;
}
@keyframes lds-grid {
  0%, 100% { opacity: 1 }
  50% { opacity: 0.5 }
}


    @media only screen and (max-width: 1100px) {
        #profileText {
            margin-right: 2rem;

            h1 { font-size: 3rem }
        }

        #profileImg__inline { 
            display: block;
            height: 20rem;
            width: 20rem;
        }
        #profileImg { display: none }
    }

    @media only screen and (max-width: 900px) {
        #profile {
            flex-direction: column;
            justify-content: center;
        }
        #profileText { margin: 0 0 2rem 0 }
    }
    @media only screen and (max-width: 600px) {

        #profileImg__inline { display: none }
        #profileImg {
            display: block;
            height: calc(100vw - 2rem);
            width: calc(100vw - 2rem);
        }

        .summarySection { margin: 3rem 0 }
        .subSectionContainer { margin: 1rem }
        .certContainer {
            margin: 1rem;
            padding-left: 6rem;
            height: 5rem;
        }
    }
    @media only screen and (max-width: 460px) {
        #profile {
            
            h1 { font-size: 2.3rem }
        }
        .skillGrid {
            grid-template-columns: repeat(5, 1fr);
            grid-template-rows: 2rem
        }
    }
    @media only screen and (max-width: 350px) {
        #profile {
        
            h1 { font-size: 1.8rem }
            h4 { font-size: .8rem }
        }
        #profileLinks {
            font-size: .8rem;

            .linkedin, .email { border-radius: 5px }
            .linkedin { background: #333 url(../../assets/linkedin.svg) no-repeat center left .5rem / auto 1.4rem }
            .email { background: #333 url(../../assets/mail.svg) no-repeat center left .5rem / auto 1.3rem }
        }

        .skillGrid { font-size: .8rem }
    }
</style>