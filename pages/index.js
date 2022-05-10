import WorkItem from '../components/workitem'

import '../assets/global.scss'

import {Component, getState} from 'react'
import Head from 'next/head'

class Index extends Component {

	constructor(props) {
		super(props)
		this.state = {
      siteTitle: 'Adil Shaikh - Product and Engineering',
      description: 'Design to engineering to validation to commercial product to value.',
      items: [
			{
				title: 'TestPrepEngine',
				theme: {backgroundColor: '#2d8a7c', color: '#fff'},
				foreColor: '#efefef',
				short: 'Student Test Preparation with customized testing and performance insights',
				date: '2018-2019',
				previews: [
				{img_url: '/static/img/tpe.gif'}
				],
				role: 'Full-Stack Development',
				status: 'Public Good till \'21',
				details: 'UI brought to life. TestPrepEngine VueJS app is powered by API Backend featuring testing with custom questions and time limits. Also delivering drill-across performance insights based on user test results.',
				technologies: ['nodejs', 'vuejs', 'sass']
      },
      {
        title: 'BMoreRaw > RawResearch',
        theme: {backgroundColor: '#060730', color: '#fff'},
        foreColor: '#efefef',
        short: 'Market research platform for businesses connecting with their customers',
        date: '2019',
        previews: [
          { img_url: '/static/img/rawresearch-1.jpg' },
          { img_url: '/static/img/rawresearch-2.jpg' },
          { img_url: '/static/img/rawresearch-3.jpg' }
        ],
        role: 'Rapid Concept Design',
        status: 'Evolved @ RawResearch',
        link: 'https://rawresearch.io/',
        details: 'Formerly called BMoreRaw, I engaged with its founder alongside my DevShop partner to process specifications, turning them to rapid visuals which were prototyped to be functional as I handed engineering schemas over to a pair of brilliant engineers. Ideas to concept to prototype eased the communication with engineers and 3rd designers for end-user UX, turning prospects to customers.',
        technologies: ['figma', 'flask', 'reactjs']
      },
			{
				title: 'PromptDog TelePrompter',
				theme: {backgroundColor: '#000', color: '#fff'},
				short: 'Cross-Platform teleprompter with complete feature set',
				date: '2018',
				previews: [
				{img_url: '/static/img/promptdog-1.jpg'}
				],
				role: 'Cross-Platform App Development',
        status: 'Commercialized @ PromptDog as V4',
        link: "https://promptdog.com/",
				details: 'Built for performance supporting all desktop platforms using electron and quasar framework (Vue.js). The teleprompter was built ground up with extensive features not limited to formatting but also mirroring the prompt, managing visual profiles as well as creating and editing the text using a powerful WYSWIG editor within the application.',
				technologies: ['electron', 'quasar', 'vuejs', 'sass']
			},
			{
				title: 'Engro Systems',
				theme: {
					backgroundColor: '#222222',
					color: '#fff'
				},
				short: 'Automating recruitment, scheduled reporting and documentation processes',
				date: '03/2017 - 09/2017',
				previews: [
				{img_url: '/static/img/engrosystems-1.jpg'},
				{img_url: '/static/img/engrosystems-2.jpg'},  
        {img_url: '/static/img/engrosystems-3.jpg'},
				],
				role: 'UI / UX & Product Development',
				status: 'Founding Product @ Partnered DevShop',
				details: 'Engro Systems is a tailored HR automation system for recruitment, intern management and timely generation and delivery of reports and certificates across various organizational deparments. I used my well-perfected craft of turning mental models to functional UI directly in-code, quickly building a rapid delivery - feedback - iterations loop. In extension I branded it strategically to pitch an extendable business case to decision makers.',
				technologies: ['mysql', 'flask', 'vuejs', 'semanticui', 'sass']
			},
      {
        title: 'UX-App',
        short: 'Full featured web based UI builder',
        theme: {
          backgroundColor: '#3c5e57',
          color: '#fff'
        },
        previews: [
        {img_url: '/static/img/uxapp.png'},
        ],
        role: 'Concept UI Design',
        status: 'Evolved @ UX-App',
        link: 'https://www.ux-app.com/',
        date: '2016',
        details: 'Early concept design for productization of extensive UI components built by a teacher. The mockups motivated new co-founder to extend a substantial equity offer for full-time commitment, as he was set on to commercialize it as a B2B UI tool. Despite passing on the offer, observing the trajectory of UX-App and founder dynamics made it my earliest motivation to go all in with product-engineering-market confluence.',
        technologies: ['photoshop', 'illustrator']
      },
			{
				title: 'Medizin Medien',
				theme: {
					backgroundColor: '#DD3962',
					color: '#fff'
				},
				color: '#3498db',
				short: 'Foundation to medical industry publications',
				date: '2016',
				previews: [
				{img_url: '/static/img/medizin-1.jpg'},
				{img_url: '/static/img/medizin-2.jpg'},
				],
				role: 'Wordpress Theme Development',
        status: 'Diversified @ MedTrix Group',
        link: 'https://medtrix.group/oesterreich/',
				'details': 'Built on then modern WP roots stack, Medizin Medien custom WP theme was given support for 3 distinct custom post types and Visual Composer (WPBakery Site Builder) custom components.',
				technologies: ['wordpress'],
				demo: 'https://medizin-medien.at/',
			}
			]
		}
	}

	renderItems = () => {
		return this.state.items.map(item => <WorkItem item={item}></WorkItem>)
	}

	render() {
return(
  <div>

  	<Head>
      <title>{this.state.siteTitle}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      <script src="https://swc.cdn.skype.com/sdk/v1/sdk.min.js"></script>
      <meta property='og:title' content={this.state.siteTitle} />
      <meta name='twitter:title' content={this.state.siteTitle} />
      <meta name="description" content={this.state.description} />
      <meta property='og:description' content={this.state.description} />
      <meta name='twitter:description' content={this.state.description} />
    </Head>
    
    <section className="intro">

      <div className="catch">
        <p class="bigs">
          <span style={{color: '#f45'}}>Artist at core.</span><br/>
          <span style={{color: '#929292'}}>Engineer by trade<span style={{color: '#ffdf00'}}>.</span></span><br/>
          <span style={{color: '#bfbfbf'}}>Harbinger of purpose<span style={{color: '#0eff00'}}>.</span></span>
        </p>
        <p>... with a bit of a knack for 🌏 🌍 🌎, 📈 &amp; 👽</p>
      </div>

      <div className="me">
        <div className="potrait"></div>
        <div>
          <p className="title">Adil Shaikh</p>
          <a href="mailto:hello@adils.me">hello@adils.me</a>
          <div class="socials">
            <a target="_blank" href="https://github.com/adiled"><img width="32" src="/static/img/github.svg" /></a>
          </div>
        </div>
      </div>

      <big>👇 <strong>My commercial contributions</strong> making the bedrock of successful* products!</big>
      <small>* for there is no failure that doesn't yield success!</small>
    </section>
    {this.renderItems()}

    <section class="call center">
      
      <code>Formerly, A <em>Brand Identity / Marketing / UX</em> Designer (2010-16)</code>

      <br/><br/>

      <a class="button bold large" target="_blank" href="https://www.dropbox.com/sh/bl1un7pb2d99cgr/AADjUjToYVWGBDz-Pb9byiTua?dl=0">VISIT MY BRANDING &amp; DESIGN GALLERY</a>

      <br/><br/><br/>
      <p>Collaborating professionally for over a decade across 🌐 specifically 🇺🇸 🇨🇦 🇬🇧 🇦🇹 🇩🇰</p>
      
      <h1>Want to realize your targets?</h1>
      <big>I go beyond engineering.. reach out to learn more from my failures alike!</big>
  		<div class="socials">
       	<a target="_blank" href="mailto:hello@adils.me"><img height="48" src="/static/img/email.svg" /> <span>hello@adils.me</span></a>
      </div>
    </section>
    <footer>
      &copy; 2022 Adils.
    </footer>
  </div>
	)}
}

export default Index