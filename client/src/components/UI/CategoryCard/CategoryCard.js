import styles from "./CategoryCard.module.css";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  // Convertim numele categoriei pentru URL
  const categorySlug = category.name.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link to={`/servicii/${categorySlug}`} className="block group">
      <div className={styles.card}>
        <img
          src={category.backgroundImage || "/placeholder.svg"}
          alt={`${category.name} background`}
          className={styles.backgroundImage}
        />

        {/* Overlay alb adăugat */}
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <div className={styles.topSection}>
            <div className={styles.iconWrapper}>
              <div className={styles.iconContainer}>
                {typeof category.icon === "string"
                  ? category.icon
                  : category.icon}
              </div>
            </div>
            <div className={styles.titleSection}>
              <h3 className={styles.title}>{category.name}</h3>
            </div>
          </div>

          <div className={styles.middleSection}></div>

          <div className={styles.bottomSection}>
            <p className={styles.description}>{category.description}</p>

            <div className={styles.footer}>
              <div className={styles.badge}>
                <span className={styles.badgeCount}>{category.count}</span>
                <span className={styles.badgeText}>prestatori</span>
              </div>
              <div className={styles.viewMore}>
                <span>Vezi servicii</span>
                <svg
                  className={styles.arrowIcon}
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
