
import { gridItems } from '@/data'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

function Grid() {
  return (
    <section id='about'>
          <BentoGrid className="w-full py-5">
            {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
                <BentoGridItem 
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
                />
            ))}
          </BentoGrid>
    </section>
  )
}

export default Grid