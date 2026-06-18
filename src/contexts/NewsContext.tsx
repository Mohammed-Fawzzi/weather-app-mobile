import axios from "axios";
import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useState,
} from "react";
import { NewsArticle } from "@/types/news";
import { NewsApiKey, NewsBaseUrl } from "@utils/variables";

type NewsContextType = {
    articles: NewsArticle[];
    isLoading: boolean;
    fetchNews: () => Promise<void>;
};

const NewsContext = createContext<NewsContextType | null>(null);

export function NewsProvider({ children }: { children: ReactNode }) {
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

    return (
        <NewsContext.Provider value={{ articles, isLoading, fetchNews }}>
            {children}
        </NewsContext.Provider>
    );
}

export default function useNews() {
    const context = useContext(NewsContext);
    if (!context) {
        throw new Error("useNews must be used within NewsProvider");
    }
    return context;
}
