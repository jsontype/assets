import styles from "./style.module.scss"

type MovieDetailItemProps = {
  id: number
  rating: number
  genres?: string[]
}

type MovieDetailProps = {
  item: MovieDetailItemProps
}

export default function MovieDetail({ item }: MovieDetailProps) {
  const rank = item.rating >= 9 ? "good" : item.rating >= 7 ? "soso" : "bad"

  return (
    <div key={item.id} className={styles.movieDetail}>
      무비 상세정보
      <div>
        장르 :{" "}
        {item.genres && item.genres.length <= 0
          ? item.genres.join(", ")
          : "장르미정"}
      </div>
      <div className={styles[rank]}>
        평점 : {item.rating || "(평점없음)"} / 10
      </div>
    </div>
  )
}
