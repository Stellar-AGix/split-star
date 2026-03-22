'use client'
import { useState } from 'react'

const members = [
  { name: 'Amara', address: 'GCEZ...4K2P', paid: true, amount: 0 },
  { name: 'Tunde', address: 'GDAM...9XLM', paid: false, amount: 0 },
  { name: 'Chisom', address: 'GBRT...2MNQ', paid: false, amount: 0 },
  { name: 'Emeka', address: 'GFVW...8PQR', paid: true, amount: 0 },
]

export default function Home() {
  const [total, setTotal] = useState('12400')
  const [people, setPeople] = useState(members)
  const [settled, setSettled] = useState<string[]>([])

  const split = parseFloat(total) / people.length
  const settle = (name: string) => setSettled(s => [...s, name])

  return (
    <div style={{ minHeight: '100vh', background: '#f5f0e8' }}>
      <nav style={{ background: '#1a1a1a', padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: 22, color: '#f5f0e8', fontWeight: 900 }}>Split<span style={{ color: '#f59e0b' }}>★</span>Star</div>
        <button style={{ background: '#f59e0b', border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 600, cursor: 'pointer', fontFamily: "'Space Grotesk', sans-serif" }}>Connect Wallet</button>
      </nav>

      <div style={{ maxWidth: 700, margin: '0 auto', padding: '60px 24px' }}>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 52, fontWeight: 900, lineHeight: 1, marginBottom: 8 }}>Split the<br /><span style={{ color: '#f59e0b' }}>bill.</span></h1>
        <p style={{ color: '#666', marginBottom: 48, fontSize: 16 }}>Settle on Stellar. No awkward IOUs.</p>

        {/* Bill Input */}
        <div style={{ background: '#fff', borderRadius: 20, padding: 32, marginBottom: 24, border: '2px solid #1a1a1a', boxShadow: '4px 4px 0 #1a1a1a' }}>
          <label style={{ fontSize: 13, fontWeight: 600, letterSpacing: 1, color: '#888' }}>TOTAL BILL (USDC)</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 10 }}>
            <span style={{ fontSize: 36, fontFamily: "'Fraunces', serif", fontWeight: 700, color: '#f59e0b' }}>$</span>
            <input
              type="number"
              value={total}
              onChange={e => setTotal(e.target.value)}
              style={{ fontSize: 36, fontWeight: 700, fontFamily: "'Fraunces', serif", border: 'none', outline: 'none', background: 'transparent', width: '100%' }}
            />
          </div>
          <div style={{ borderTop: '1px solid #eee', marginTop: 16, paddingTop: 16, display: 'flex', gap: 40 }}>
            <div><div style={{ fontSize: 12, color: '#888' }}>SPLIT {people.length} WAYS</div><div style={{ fontWeight: 700, fontSize: 18 }}>${split.toFixed(2)}</div></div>
            <div><div style={{ fontSize: 12, color: '#888' }}>NETWORK FEE</div><div style={{ fontWeight: 700, fontSize: 18, color: '#10b981' }}>~$0.001</div></div>
            <div><div style={{ fontSize: 12, color: '#888' }}>SETTLES IN</div><div style={{ fontWeight: 700, fontSize: 18 }}>~5 sec</div></div>
          </div>
        </div>

        {/* Members */}
        <div style={{ background: '#fff', borderRadius: 20, padding: 28, border: '2px solid #1a1a1a', boxShadow: '4px 4px 0 #1a1a1a' }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 20 }}>Group Members</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {people.map(p => (
              <div key={p.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px', background: settled.includes(p.name) ? '#f0fdf4' : '#f9f9f9', borderRadius: 12, border: `1px solid ${settled.includes(p.name) ? '#bbf7d0' : '#eee'}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f5f0e8', fontWeight: 700, fontSize: 16 }}>{p.name[0]}</div>
                  <div>
                    <div style={{ fontWeight: 600 }}>{p.name}</div>
                    <div style={{ fontSize: 11, color: '#999' }}>{p.address}</div>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 700, fontSize: 16 }}>${split.toFixed(2)}</div>
                  {settled.includes(p.name)
                    ? <div style={{ fontSize: 12, color: '#10b981', fontWeight: 600 }}>✓ Settled</div>
                    : <button onClick={() => settle(p.name)} style={{ fontSize: 12, background: '#f59e0b', border: 'none', borderRadius: 6, padding: '4px 10px', fontWeight: 600, cursor: 'pointer', marginTop: 4 }}>Request</button>
                  }
                </div>
              </div>
            ))}
          </div>
          <button style={{ marginTop: 20, width: '100%', background: '#1a1a1a', color: '#f5f0e8', border: 'none', borderRadius: 12, padding: '14px', fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>
            Send all payment requests →
          </button>
        </div>
      </div>
    </div>
  )
}
