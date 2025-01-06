
// Types for our card components
type CardProps = {
    children: React.ReactNode;
    className?: string;
}

type CardHeaderProps = {
    title: string;
    subtitle?: string;
}

type CardContentProps = {
    children: React.ReactNode;
}

type CardFooterProps = {
    children: React.ReactNode;
}

type CardImageProps = {
    src: string;
    alt: string;
}

// Base Card component
const Card = ({ children, className = '' }: CardProps) => {
    return (
        <div className={`card ${className}`} style={{
            border: '1px solid #ddd',
            borderRadius: '20px',
            overflow: 'hidden',
            padding: 20,
        }}>
            {children}
        </div>

    );
};

// Card Header component
const CardHeader = ({ title, subtitle }: CardHeaderProps) => {
    return (
        <div className="card-header">
            <h3 className="card-title">{title}</h3>
            {subtitle && (
                <p className="card-subtitle">{subtitle}</p>
            )}
        </div>
    );
};

// Card Image component
const CardImage = ({ src, alt }: CardImageProps) => {
    return (
        <div className="card-image-container" style={{
            width: 100
        }}>
            <img
                src={src}
                alt={alt}
                className="card-image"
            />
        </div>
    );
};

// Card Content component
const CardContent = ({ children }: CardContentProps) => {
    return (
        <div className="card-content">
            {children}
        </div>
    );
};

// Card Footer component
const CardFooter = ({ children }: CardFooterProps) => {
    return (
        <div className="card-footer">
            {children}
        </div>
    );
};


// Named compound components export
Card.Header = CardHeader;
Card.Image = CardImage;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;