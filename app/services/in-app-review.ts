import InAppReview from "react-native-in-app-review"
import { storage } from "../utils/storage"

const POSITIVE_ACTIONS_KEY = "IN_APP_REVIEW_POSITIVE_ACTIONS"

export const addPositiveAction = () => {
  if(InAppReview.isAvailable()) {
    const positiveActions = (storage.getNumber(POSITIVE_ACTIONS_KEY) || 0) + 1
    storage.set(POSITIVE_ACTIONS_KEY, positiveActions)
    // cada 35 acciones positivas
    if(positiveActions % 35 === 0) {
      InAppReview.RequestInAppReview().catch(() => {});
    }
  }
}