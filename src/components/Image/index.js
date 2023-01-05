import classNames from 'classnames/bind';
import { useState, forwardRef } from 'react';
import styles from './Image.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
const Image = forwardRef(({ className, src, alt, fallback: customFallback, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback || images.noImage);
    };

    return (
        <img
            className={cx('wrapper', className)}
            ref={ref}
            {...props}
            src={fallback || src}
            alt={alt}
            onError={handleError}
        />
    );
});

export default Image;
