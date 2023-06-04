import React from 'react';

type RectangleSkeletonProps = {
    
};

const RectangleSkeleton:React.FC<RectangleSkeletonProps> = () => {
    
    return  (
		<div className='space-y-2.5 animate-pulse'>
			<div className='flex items-center w-full space-x-2'>
				<div className='h-6 w-12 rounded-full bg-dark-fill-3'></div>
			</div>
		</div>
	);
}
export default RectangleSkeleton;