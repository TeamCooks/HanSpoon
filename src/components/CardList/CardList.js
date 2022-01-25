import { Card } from '..';
import styles from './CardList.module.scss';
import noImgUrl from '@assets/images/no-image.jpg';
import PropTypes from 'prop-types';


export function CardList({ results }) {  
  return (
      <ul className={styles.list}>
        {results.map(({ id, title, image, imgSrc }) => {
          let imgUrl = `https://spoonacular.com/recipeImages/${id}-312x231`;
          if (!image) imgUrl = noImgUrl;
          return (
            <li className={styles.item} key={id}>
              <Card
                id={id}
                type="smallSquare"
                background="none"
                hasSummary={false}
                headingPosition="bottomCenter"
                imgSrc={imgSrc || imgUrl}
                title={title}
              />
            </li>
          );
        })}
      </ul>
  );
}


CardList.propTypes = {
  results: PropTypes.array
}