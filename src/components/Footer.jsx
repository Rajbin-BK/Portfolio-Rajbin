const Footer = () => {
	return (
		<footer className='py-2 md:px-8 md:py-0 bg-blue-950 text-white border-t border-gray-800 rounded-md'>
			<div className='flex flex-col items-center justify-between gap-4 md:h-10 md:flex-row'>
				<p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
					Built by{" "}
					<a
						href='https://www.linkedin.com/in/rajbinbk'
						target='_blank'
						className='font-medium underline underline-offset-4'
					>
						Rajbin BK
					</a>
					. The source code is available on{" "}
					<a
						href='https://github.com/Rajbin-BK'
						target='_blank'
						rel='noreferrer'
						className='font-medium underline underline-offset-4'
					>
						GitHub
					</a>
					.
				</p>
                <p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
                Copyright &copy; 2024 by Rajbin . All rights reserved
                </p>
			</div>
		</footer>
	);
};
export default Footer;