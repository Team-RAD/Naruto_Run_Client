import React from 'react';

export default () => {
	return (
		<div>
			<div>
				<h1 className='display-3 text-center'>
					What is <span className='text-info'>Naruto Run</span>?
				</h1>
				<p className='text-secondary text-center'>Version 1.0.0</p>
			</div>
			<br />
			<div>
				<p><em>"As a developer that struggled finding my way into the industry I would like to be able to share my experiences with others so they can transition as easy as possible into their new roles." </em> - Ned Naruto (Founder)</p>

				<p><em>"As a student I would like a platform that can help to find more direct pathways to specific parts of the tech industry and in the most cost effective/efficient way as I have a budget."</em> - Caleb Lungy (Struggling Student)</p>
				
			</div>
			<br/>
			<div>
				<h2 className='display-5 text-center'>
					The <span className='text-info'>Problem</span>
				</h2>
				<p className='lead'>
					Technology is a massive industry with many pathways of entry and
					career directions to take. It’s often very daunting for new tech
					hopefuls to get started on their journey and this can be made harder
					by uncertainty with how best to proceed due to seemingly limitless
					opinions online.
				</p>
			</div>
			<div>
				<h2 className='display-5	 text-center'>
					The <span className='text-info'>Solution</span>
				</h2>
				<p className='lead'>
					Naruto Run helps to speed up the process of identifying which area of
					the tech world people want to work in and the best road to run down to
					get there. It does this by providing a hub for the posting of tech
					career journeys by users already in the industry (contributors) for
					the reference of other users (seekers) wanting to make the move into
					tech. It allows contributors to outline their path into a tech career
					in a condensed, efficient form, so that seekers can quickly distill
					this information and that of other NR posts into a clearer picture of
					where they should focus their efforts.
				</p>
			</div>
			<div>
				<h2 className='display-5	 text-center'>
					The <span className='text-info'>Team</span>
				</h2>
				<p className='lead text-center'>
					We are Team RAD... Yep, we're that cool.
				</p>
				<ul className='lead text-center list-unstyled'>
					<li>
						<span className='lead text-info'>Ryan</span> Challen
					</li>
					<li>
						<span className='lead text-info'>Adam</span> Hyde
					</li>
					<li>
						<span className='lead text-info'>David</span> Johnson
					</li>
				</ul>
			</div>
		</div>
	);
};
