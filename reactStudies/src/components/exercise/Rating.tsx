import { Rate } from '@/types/Rate';
import { useEffect } from 'react';

export const Rating = ({ rate }: Rate) => {
    if(rate > 5) rate = 5;
    if(rate < 0) rate = 0;

    let emoji = "⭐";

    return (
        <div className="flex justify-center mt-10">
            <div className="text-4xl mr-2 font-bold">
                {rate.toFixed(1)}
            </div>
            <div className="text-3xl">
                {emoji.repeat(rate)}
            </div>
        </div>
    );
}