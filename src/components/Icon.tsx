import React, { FC } from 'react'
import { IconProps } from '../utils/Types';

const IconComponent: FC<IconProps> = ({key, className, IconImg}) => {
    return (
        <div key={key} className={className}><IconImg></IconImg></div>
    )
}

export default IconComponent
