import axios from "axios";
import { useCallback, useState } from "react";
import { NewsArticle } from "@/types/news";
import { NewsApiKey, NewsBaseUrl } from "@utils/variables";

export default function useNews() {
    const [articles, setArticles] = useState<NewsArticle[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchNews = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(
                `${NewsBaseUrl}/everything?q=weather&language=en&sortBy=publishedAt&apiKey=${NewsApiKey}`,
            );
            setArticles(response.data.articles ?? []);
        } catch (error) {
            console.error("Error fetching news:", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { articles, isLoading, fetchNews };
}
