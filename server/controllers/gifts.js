import { pool } from '../config/database.js'

const getGifts = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM gifts ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json( { error: error.message } )
    }
}

const getGiftById = async (req, res) => {
    try {
        const giftId = req.params.giftId;
        const searchQuery = `SELECT * FROM gifts WHERE id = ${giftId}`
        const results = await pool.query(searchQuery);
        res.status(200).json(results.rows[0])
    }
    catch (error) {
        res.status(409).json( {error: error.message} )
    }
}

export default {
  getGifts,
  getGiftById
}