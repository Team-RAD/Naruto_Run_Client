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
				<p>
					<em className='text-info'>
						"As a developer that had a hard time finding my way into the
						industry, I would like to share my advice with others so they can
						transition much more easily into their tech career."{' '}
					</em>{' '}
					- Nancy Naruto (Founder, Silent Partner)
				</p>

				<p>
					<em className='text-info'>
						"As a tech hopeful, I would like a platform that helps me find the
						most direct and cost effective pathways into the industry as I have
						limited time and a budget."
					</em>{' '}
					- Caleb 'Lungy' Leung (Struggling New Coder)
				</p>
			</div>
			<br />
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
