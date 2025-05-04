import React from 'react';
import Image from 'next/image';

const TeamCard = ({
  name,
  email,
  phone,
  github,
  portfolio,
  linkedin,
  image,
}) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: '1rem',
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      padding: '1.5rem',
      margin: '1rem 0',
      backgroundColor: 'transparent',

      maxWidth: '700px',
    }}>
      <Image
        src={image}
        alt={name}
        width={96}
        height={96}
        style={{
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />
      <div>
        <h2 style={{ margin: '0 0 0.5rem 0' }}><strong>{name}</strong></h2>
        {email && <p><strong>Email:</strong> {email}</p>}
        {phone && <p><strong>Celular:</strong> {phone}</p>}
        {github && <p><strong>GitHub:</strong> <a href={github} target="_blank" rel="noopener noreferrer">{github}</a></p>}
        {portfolio && <p><strong>Portfólio:</strong> <a href={portfolio} target="_blank" rel="noopener noreferrer">{portfolio}</a></p>}
        {linkedin && <p><strong>LinkedIn:</strong> <a href={linkedin} target="_blank" rel="noopener noreferrer">{linkedin}</a></p>}
      </div>
    </div>
  );
};

export default TeamCard;
