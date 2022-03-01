function About() {
	return (
		<div>
			<h1 className='text-6xl mb-4'>Github Finder</h1>
			<p className='mb-4 text-xl font-light'>
				This is a React.js App to search GitHub profiles and view profile details. The app is similar to the version 1
				built in 2020{' '}
				<a href='https://github.com/oluwasheeun/github-User-Finder/' target='_blank'>
					{' '}
					[here]
				</a>{' '}
				and is part of <a href='https://traversymedia.com'> Brad Traversy</a>{' '}
				<a href='https://www.udemy.com/course/react-front-to-back-2022/' target='_blank'>
					{' '}
					"React Front To Back 2022"
				</a>{' '}
				udemy course.
			</p>
			<p className='text-lg text-gray-400'>Designed by: 'Seun Olukayode</p>
			<p className='text-lg text-gray-400'>Version: 1.2.0</p>
		</div>
	)
}

export default About
